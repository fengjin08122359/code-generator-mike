const fs = require('fs')
const path = require('path')
const dbFile = path.resolve(__dirname, './index.json');
const basicFile = path.resolve(__dirname, './basic.json');
const arrangeFile = path.resolve(__dirname, './arrange.json');

class Arrange {
  constructor () {

  }
  readRouter () {
    var router = {}
    var checkDir = fs.existsSync(arrangeFile)
    if (checkDir) {
      var result = fs.readFileSync(arrangeFile, 'utf-8')
      try{
        router = JSON.parse(result)
      }catch(error){}
    }
    return router
  }
  writeRouter (result) {
    var router = result
    var checkDir = fs.existsSync(arrangeFile)
    if (checkDir) {
      try{
        router = JSON.parse(result)
      }catch(error){}
      fs.writeFileSync(arrangeFile, JSON.stringify(router))
    }
  }
  getComponentsList () {
    var router =  this.readRouter() 
    return router
  }
  getComponents (id) {
    var router =  this.readRouter() 
    var comps = router[id] || []
    return comps
  }
  saveComponents (id, list) {
    var router =  this.readRouter() 
    router[id] = list
    this.writeRouter(router)
  }
}

class Basic {
  constructor () {

  }
  readRouter () {
    var router = {}
    var checkDir = fs.existsSync(basicFile)
    if (checkDir) {
      var result = fs.readFileSync(basicFile, 'utf-8')
      try{
        router = JSON.parse(result)
      }catch(error){}
    }
    return router
  }
  writeRouter (result) {
    var router = result
    var checkDir = fs.existsSync(basicFile)
    if (checkDir) {
      try{
        router = JSON.parse(result)
      }catch(error){}
      fs.writeFileSync(basicFile, JSON.stringify(router))
    }
  }
  getComponents (id) {
    var router =  this.readRouter() 
    var comps = router[id] || []
    return comps
  }
  saveComponents (id, list) {
    var router =  this.readRouter() 
    router[id] = list
    this.writeRouter(router)
  }
}

class Router{
  constructor(json) {
    this.id = json.id || `router${new Date().getTime()}`
    this.name = json.name || 'home'
    this.path = json.path || '/home'
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
  modifyName (name) {
    this.name = name
    db.saveProject(this)
  }
  addRouter ({name,path}) {
    var router = new Router({name,path})
    if (this.router.filter(item => item.name == name || item.path == path).length == 0) {
      this.router.push(router)
      db.saveProject(this)
    }
  }
  delRouter (routerId) {
    if (!routerId) return
    this.router = this.router.filter(item => {
      return item.id != routerId
    }) 
    db.saveProject(this)
  }
  modifyRouter({routerId, name, path}) {
    this.router = this.router.map(item => {
      if (item.id == routerId) {
        item = new Router({name,path})
      }
      return item
    },[]) 
    db.saveProject(this)
  }
}

class Db{
  constructor() {
    this.basic = new Basic();
    this.arrange = new Arrange()
  }
  readDb () {
    var db = {}
    var checkDir = fs.existsSync(dbFile)
    if (checkDir) {
      var result = fs.readFileSync(dbFile, 'utf-8')
      try{
        db = JSON.parse(result)
      }catch(error){}
    }
    return db
  }
  writeDb (result) {
    var db = result
    var checkDir = fs.existsSync(dbFile)
    if (checkDir) {
      try{
        db = JSON.parse(result)
      }catch(error){}
      fs.writeFileSync(dbFile, JSON.stringify(db))
    }
  }
  getAllProject () {
    var all = []
    var db = this.readDb()
    all = db.db
    return all.map(item => {
      return new Project(item)
    }, [])
  }
  getProjectSingleById (id) {
    if (!id) return ;
    var result = this.getAllProject();
    return result.filter(item => item.id == id)[0]
  }
  getProjectSingleByName (name) {
    if (!name) return ;
    var result = this.getAllProject();
    return result.filter(item => item.name == name)[0]
  }
  delProject(id) {
    if (!id) return ;
    var all = []
    all = this.readDb().db
    this.writeDb({
      db: all.filter(item => {
        return id != item.id
      })
    })
  }
  addProject (name) {
    if (!name) return ;
    if (this.getProjectSingleByName(name)) {
      console.log('already exsit');
    } else {
      var all = []
      all = this.readDb().db
      all.push(new Project({name}))
      this.writeDb({
        db: all
      })
    }
  }
  modifyProject (id, {newName}) {
    if (!id) return 
    var target = this.getProjectSingleById(id)
    if (target) {
      target.modifyName(newName)
    }
  }
  saveProject (project) {
    var all = []
    all = this.readDb().db
    this.writeDb({
      db: all.map(item => {
        if (item.id == project.id) {
          item = project
        }
        return item
      }, [])
    })
  }
  getRouter (id) {
    var res = []
    var target = this.getProjectSingleById(id)
    if (target) {
      res = target.router
    }
    return res
  }
  addRouter (id, {name,path}) {
    var target = this.getProjectSingleById(id)
    if (target) {
      target.addRouter({name,path})
    }
  }
  delRouter (id, routerId) {
    var target = this.getProjectSingleById(id)
    if (target) {
      target.delRouter(routerId)
    }
  }
  modifyRouter(id, {routerId,name,path}) {
    var target = this.getProjectSingleById(id)
    if (target) {
      target.modifyRouter({routerId,name,path})
    }
  }
  getBasic ({id}) {
    return this.basic.getComponents(id)
  }
  saveBasic ({id, list}) {
    return this.basic.saveComponents(id, list)
  }
  getArrangeList () {
    return this.arrange.getComponentsList()
  }
  getArrange ({id}) {
    return this.arrange.getComponents(id)
  }
  saveArrange ({id, list}) {
    if (!id.startsWith('arr')) {
      id = 'arr' + id
    }
    return this.arrange.saveComponents(id, list)
  }
}

let db = new Db()

module.exports = {
  db
}