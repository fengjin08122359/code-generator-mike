
const redis = require("redis");
const config = require('./config')
let dbConfig = config.redis;
let RDS_PORT = dbConfig.port;
let RDS_HOST = dbConfig.host;
let RDS_PWD = dbConfig.pass;
let RDS_OPTS = {auth_pass: RDS_PWD};
const client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('ready',function(res){
  console.log('ready');
});
 
client.on('end',function(err){
  console.log('end');
});

client.on('error', function (err) {
  console.log(err);
});

client.on('connect',function(){
  console.log('redis connect success!');
});

let control = {
  get (key) {
    return new Promise((resolve) => {
      client.get(key,  function(err,result){
        var res = result;
        try{
          res = JSON.parse(result)
        }catch(error){}
        resolve(res)
      });
    })
  },
  set (key, value) {
    return new Promise((resolve) => {
      client.set(key, value,  function(err,result){
        resolve()
      });
    })
  },
}

class PostMan {
  constructor () {
    
  }
  async read (routerId) {
    const data = await control.get('code-generator/postman/' + routerId);
    return data || []
  }
  async write (routerId, result) {
    var db = result
    try{
      db = JSON.stringify(result)
    }catch(error){}
    await control.set('code-generator/postman/' + routerId, (db));
  }
  async getList (routerId) {
    return await this.read(routerId) 
  }
  async getSingle (routerId, id) {
    return (await this.read(routerId)).filter(item => item.id == id)[0]
  }
  async delSingle (routerId, id) {
    if (!id) return
    var list = (await this.read(routerId)).filter(item => {
      return item.id != id
    }) 
    await this.write(routerId, list)
  }
  async saveSingle (routerId, id, target) {
    target.id = id
    var list = await  this.read(routerId) 
    var hasList = false;
    var result = list.reduce((total, item) => {
      if (item.id == id) {
        item = target
        hasList = true
      }
      total.push(item)
      return total
    }, [])
    if (!hasList) {
      result.push(target)
    }
    await this.write(routerId, result)
  }
}

class Arrange {
  constructor () {

  }
  async readComps () {
    const data = await control.get('code-generator/comps');
    return data || []
  }
  async writeComps (result) {
    var db = result
    try{
      db = JSON.stringify(result)
    }catch(error){}
    await control.set('code-generator/comps', (db));
  }
  async getComponentsList () {
    var router =  await this.readComps() 
    return router
  }
  async getComponents (id) {
    var router = await this.readComps() 
    var comps = router.filter(item => item.id == id)[0]
    return comps
  }
  async delComponents (id) {
    if (!id) return
    var comps = (await this.readComps()).filter(item => {
      return item.id != id
    }) 
    await this.writeComps(comps)
  }
  async saveComponents (id, list, alias) {
    var router = await  this.readComps() 
    alias = alias || id
    var hasComp = false;
    var result = router.reduce((total, item) => {
      if (item.id == id) {
        item.list = list || item.list
        item.alias = alias || item.alias
        hasComp = true
      }
      total.push(item)
      return total
    }, [])
    if (!hasComp) {
      result.push({
        id,
        list: list || [],
        alias,
      })
    }
    await this.writeComps(result)
  }
}

class Basic {
  constructor () {

  }
  async readRouter () {
    const data = await control.get('code-generator/router');
    return data || []
  }
  async writeRouter (result) {
    var db = result
    try{
      db = JSON.stringify(result)
    }catch(error){}
    await control.set('code-generator/router', db);
  }
  async getComponents (id) {
    var router = await  this.readRouter() 
    var comps = router.filter(item => item.id == id)[0]
    var result = []
    try{
      result = JSON.parse(comps.list)
    }catch(error){}
    return result
  }
  async getComponentsDetail (id) {
    var router = await  this.readRouter() 
    var comps = router.filter(item => item.id == id)[0]
    return comps 
  }
  async delComponents (id) {
    if (!id) return
    var comps = (await this.readRouter()).filter(item => {
      return item.id != id
    }) 
    await this.writeRouter(comps)
  }
  async saveComponents (id, list, alias) {
    var router = await  this.readRouter() 
    alias = alias || id
    var hasComp = false;
    var result = router.reduce((total, item) => {
      if (item.id == id) {
        item.list = list
        item.alias = alias
        hasComp = true
      }
      total.push(item)
      return total
    }, [])
    if (!hasComp) {
      result.push({
        id,
        list,
        alias
      })
    }
    await this.writeRouter(result)
  }
}

class Router{
  constructor(json) {
    this.id = json.id || `router${new Date().getTime()}`
    this.name = json.name || 'home'
    this.path = json.path || '/home'
    this.alias = json.alias || this.id
  }
}

class Project{
  constructor(json) {
    this.id = json.id || `project${new Date().getTime()}`
    this.name = json.name
    this.router = (json.router || []).map(item => {
      return new Router(item)
    }, [])
  }
  async  modifyName (name) {
    this.name = name
    await db.saveProject(this)
  }
  async addRouter ({name,path, alias}) {
    var router = new Router({name,path, alias})
    if (this.router.filter(item => item.name == name || item.path == path).length == 0) {
      this.router.push(router)
      await db.saveProject(this)
    }
  }
  async delRouter (routerId) {
    if (!routerId) return
    this.router = this.router.filter(item => {
      return item.id != routerId
    }) 
    await db.saveProject(this)
  }
  async modifyRouter({routerId, name, path, alias}) {
    this.router = this.router.map(item => {
      if (item.id == routerId) {
        item = new Router({id: routerId, name,path, alias})
      }
      return item
    },[]) 
    await db.saveProject(this)
  }
}

class Db{
  constructor() {
    this.basic = new Basic();
    this.arrange = new Arrange()
    this.postman = new PostMan()
  }
  async readDb () {
    const data = await control.get('code-generator/db');
    return data || []
  }
  async writeDb (result) {
    var db = result
    try{
      db = JSON.stringify(result)
    }catch(error){}
    await control.set('code-generator/db', db);
  }
  async getAllProject () {
    var all = await this.readDb()
    return all.map(item => {
      return new Project(item)
    }, [])
  }
  async getProjectSingleById (id) {
    if (!id) return ;
    var result = await this.getAllProject();
    return result.filter(item => item.id == id)[0]
  }
  async getProjectSingleByName (name) {
    if (!name) return ;
    var result = await  this.getAllProject();
    return result.filter(item => item.name == name)[0]
  }
  async delProject(id) {
    if (!id) return ;
    var all = await this.readDb()
    this.writeDb( all.filter(item => {
        return id != item.id
      }))
  }
  async addProject (name) {
    if (!name) return ;
    if (await this.getProjectSingleByName(name)) {
      console.log('already exsit');
    } else {
      var all = await this.readDb()
      all.push(new Project({name}))
      this.writeDb(all)
    }
  }
  async modifyProject (id, {newName}) {
    if (!id) return 
    var target = await this.getProjectSingleById(id)
    if (target) {
      target.modifyName(newName)
    }
  }
  async saveProject (project) {
    var all = await this.readDb()
    this.writeDb(all.map(item => {
      if (item.id == project.id) {
        item = project
      }
      return item
    }, []))
  }
  async getRouter (id) {
    var res = []
    var target = await this.getProjectSingleById(id)
    if (target) {
      res = target.router
    }
    return res
  }
  async addRouter (id, {name,path, alias}) {
    var target = await  this.getProjectSingleById(id)
    if (target) {
      await target.addRouter({name,path, alias})
      await this.basic.saveComponents(id, '', alias)
    }
  }
  async delRouter (id, routerId) {
    var target = await this.getProjectSingleById(id)
    if (target) {
      target.delRouter(routerId)
    }
  }
  async modifyRouter(id, {routerId,name,path, alias}) {
    var target = await this.getProjectSingleById(id)
    if (target) {
      await target.modifyRouter({routerId,name,path, alias})
      await this.basic.saveComponents(routerId, '', alias)
    }
  }
  async getBasic ({id}) {
    return await this.basic.getComponentsDetail(id)
  }
  async getBasicList  ({id}) {
    return await this.basic.getComponents(id)
  }
  async saveBasic ({id, list, alias}) {
    return await this.basic.saveComponents(id, list, alias)
  }
  async getArrangeList () {
    return await this.arrange.getComponentsList()
  }
  async getArrange ({id}) {
    return await this.arrange.getComponents(id)
  }
  async delArrange ({id}) {
    return await this.arrange.delComponents(id)
  }
  async saveArrange ({id, list, alias}) {
    if (!id.startsWith('arr')) {
      id = 'arr' + id
    }
    return await this.arrange.saveComponents(id, list, alias)
  }
  async getArrangeAlias (id) {    
    var arr = await this.arrange.getComponents(id)
    var basic = await this.basic.getComponentsDetail(id)
    var target = arr || basic 
    return target ? (target.alias || target.id || id) : id
  }
}

let db = new Db()

module.exports = {
  db
}

