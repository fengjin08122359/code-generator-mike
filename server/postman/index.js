var collection  = require('./collection.json');
var request = require("request"); 
var {db} = require('../redis/index')

function formatParams(data) {
  var arr = [];
  for(var name in data){
    if (data[name] != undefined) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
  }
  return arr.join("&");
}

class HttpLink {
  constructor (json) {
    this.id = json.id || `httplink${new Date().getTime()}`
    this.name = json.name || ''
    this.type = json.type || ''
    this.url = json.url || ''
    this.data = json.data || {}
  }
  async save(routerId, json) {
    if (json) {
      this.name = json.name || this.name
      this.type = json.type || this.type
      this.url = json.url || this.url
      this.data = json.data || this.data
    }
    await db.postman.saveSingle(routerId, this.id, this)
  }
  async test () {
    if (this.type == 'get') {
      return await this.sendGet()
    } else if (this.type == 'post') {
      return await this.urlencoded()
    } else if (this.type == 'postJson') {
      return await this.sendPost()
    } else if (this.type == 'postForm') {
      return await this.formData()
    }
  }
  sendGet () {
    return new Promise(resolve => {
      request(this.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
        }
      })
    })
  }
  sendPost () {
    return new Promise(resolve => {
      request({
        url: this.url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(this.data)
      }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
        }
      });
    })
  }
  urlencoded () {
    return new Promise(resolve => {
      request.post({url:this.url, form:this.data}, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
        }
      })
    })
  }
  formData () {
    return new Promise(resolve => {
      request.post({url:this.url, formData: this.data}, function (error, response, body) {  
          if (!error && response.statusCode == 200) {
        }
      })
    })
  }
}

class REQUEST {
  constructor (item, name) {
    this.receive = item;
    this.request = this.receive.request;
    this.alias = '';
    var pattern=new RegExp("^[0-9a-zA-Z]+$");
    if (pattern.test(item.name)) {
      this.name = item.name
    }else {
      this.name = 'test';
    }
    this.url = '';
    this.proxy = ''
    this.data = {};
    this.type = 'get';
    this.response = ''
    this.host = ''
    this.port = ''
    this.protocol = 'http'
    this.path = ''
    this.header = [];
    this.httplink =  new HttpLink({})
    this.httplink.name = this.name
    this.manageHost()
    this.manageType()
    this.manageData()
  }
  manageHost () {
    this.host = this.request.url.host.join('.')
    this.port = this.request.url.port || this.port
    this.protocol = this.request.url.protocol || this.protocol
    this.path = this.request.url.path.join('/')
    this.proxy = this.protocol + '://' + this.host + (this.port ? (':'+  this.port) : '')
    this.url = this.proxy + '/' + this.path
    this.httplink.url = this.url
  }
  manageType () {
    var methodType = this.request.method || this.type
    this.type = methodType.toLowerCase() 
    this.httplink.type = this.type
    if (this.type == 'post') {
      if (this.request.body.mode == 'binary') {
        this.httplink.type = 'postForm'
      } else if (this.request.body.mode == 'formdata') {
        this.httplink.type = 'postJson'
      }
    }
  }
  manageData () {
    var body = this.request.body
    var query = this.request.url.query
    if (query) {
      var queryList = query.reduce((total, item) => {
        total[item.key] = item.value
        return total
      },{})
      if (this.type == 'get') {
        this.data = queryList
      } else if (this.type == 'post') {
        this.url = this.url + (this.url.indexOf('?')>-1?'&':'?') +formatParams(queryList)
        this.httplink.url = this.url
      }
    } 
    if (body) {
      if (typeof body[body.mode] == 'string') {
        if (body[body.mode]) {
          this.data = eval('('+body[body.mode]+')') 
        }
      } else if (body[body.mode] instanceof Array) {
        this.data = body[body.mode].reduce((total, item) => {
          total[item.key] = item.value
          return total
        },{})
      }
    }
    this.httplink.data = this.data || {}
  }
  async test () {
    return await this.httplink.test()
  }
}



async function analysisJson(routerId, json) {
  for(let item of json.item){
    if (!item.item) {
      var target = analysis(item, json.info ? json.info.name: json.name)
      await target.httplink.save(routerId)
    } else {
      await analysisJson(routerId, item)
    }
  }
}

function analysis(item, name) {
  return new REQUEST(item, name)
}

function analysisTest() {
  analysisJson(collection)
}
async function getList(routerId) {
  return await db.postman.getList(routerId)
}
async function getSingle(routerId, id) {
  return new  HttpLink(await db.postman.getSingle(routerId, id) || {})
}
async function delSingle(routerId, id) {
  return await db.postman.delSingle(routerId, id)
}
module.exports = {
  analysisJson,
  analysis,
  analysisTest,
  getList,
  getSingle,
  delSingle
}