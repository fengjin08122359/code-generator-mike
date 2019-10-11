import {Handle, DataHandle, httplink} from 'nclient-microfront';

class HttpLink {
  constructor (json) {
    this.id = json.id || `httplink${new Date().getTime()}`
    this.name = json.name || ''
    this.type = json.type || ''
    this.url = json.url || ''
    this.data = json.data || {}
    this.array = []
    this.dataToArray()
  }
  dataToArray () {
    this.array = []
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.array.push({
          name: key,
          value: this.data[key]
        })
      }
    }
  }
  addData () {
    this.array.push({
      name: '',
      value: ''
    })
  }
  delData (index) {
    this.array.splice(index, 1)
  }
  getData () {
    return this.array.reduce((total,item) => {
      if (item.name) {
        total[item.name] = item.value
      }
      return total
    }, {})
  }
}

class Postman extends DataHandle{
  constructor() {
    super('postmanComp')
    this.routerId = ''
    this.list = []
  }
  init () {
    console.log('Postman init')
  }
  getList () {
    httplink('postmanGetList', `/postman/getList`, {routerId: this.routerId}, 'post')
    .then(result => {
      console.log(result)
      if (result.res) {
        this.list = result.res
      }
    })
  }
  manage (data) {
    return new HttpLink(data);
  }
}

let postman = new Postman()

let handle = new Handle({
  name: 'postmanComp',
  created () {
    postman.init()
    console.log('postman created')
  },
  mounted () {
    console.log('postman mounted')
  },
  saveSingle (data) {
    httplink('postmanSaveSingle', `/postman/saveSingle`, {
      routerId: postman.routerId,
      id: data.id,
      name: data.name,
      type: data.type,
      url: data.url,
      data: JSON.stringify(data.getData()),
    }, 'post')
    .then(result => {
      postman.getList()
    })
  },
  test (id) {
    httplink('postmanTest', `/postman/test`, {
      routerId: postman.routerId,
      id,
    }, 'post')
    .then(result => {
      if (typeof result.res == 'object') {
        alert(JSON.stringify(result.res))
      } else {
        alert((result.res))
      }
    })
  },
  delMul (ids) {
    httplink('postmanDelMul', `/postman/delMul`, {
      routerId: postman.routerId,
      ids,
    }, 'post')
    .then(result => {
      postman.getList()
    })
  },
  exportZip (id) {
    httplink('exportZippostman', `/exportZip/postman`, {
      id
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  },
  switchRoute (routerId) {
    postman.routerId = routerId
    postman.getList()
  }
})

export default handle

export {
  postman
}