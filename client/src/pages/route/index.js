import {Handle, DataHandle, httplink} from 'nclient-microfront';

class Route extends DataHandle{
  constructor() {
    super('routeComp')
    this.list = []
    this.id = '';
  }
  init () {
    console.log('Route init')
  }
  getRouter (id) {
    this.id = id || this.id
    httplink('getRouter', `/project/getRouter`, {id: this.id}, 'post')
    .then(result => {
      this.list = result.res
    })
  }
}

let route = new Route()

let handle = new Handle({
  name: 'routeComp',
  created () {
    route.init()
    console.log('route created')
  },
  mounted () {
    console.log('route mounted')
  },
  switchRoute (pk) {
    route.getRouter(pk)
  },
  addRouter (name, path, alias) {
    httplink('addRouter', `/project/addRouter`, {name, path,id: route.id, alias}, 'post')
    .then(result => {
      route.getRouter()
    })
  },
  edit (item) {
    httplink('editRouter', `/project/modifyRouter`, {name:item.name, path:item.path,id: route.id,routerId: item.id, alias:item.alias}, 'post')
    .then(result => {
      route.getRouter()
    })
  },
  del (item) {
    httplink('editName', `/project/delRouter`, {id: route.id,routerId: item.id, }, 'post')
    .then(result => {
      route.getRouter()
    })
  },
  exportZip (needPage = 1) {
    httplink('exportZiprouter', `/exportZip/router`, {
      needPage,
      id: route.id,
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  }
})

export default handle

export {
  route
}