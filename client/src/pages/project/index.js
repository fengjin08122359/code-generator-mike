import {Handle, DataHandle, httplink} from 'nclient-microfront';

class Project extends DataHandle{
  constructor() {
    super('projectComp')
    this.list = []
  }
  init () {
    console.log('Project init')
    this.getAllProject()
  }
  getAllProject () {
    httplink('getAllProject', `/project/`, {}, 'post')
    .then(result => {
      console.log(result)
      this.list = result.res
    })
  }
}

let project = new Project()

let handle = new Handle({
  name: 'projectComp',
  created () {
    project.init()
    console.log('project created')
  },
  mounted () {
    console.log('project mounted')
  },
  addProject (name) {
    httplink('addProject', `/project/add`, {name}, 'post')
    .then(result => {
      project.getAllProject()
    })
  },
  editName (item) {
    httplink('editName', `/project/modify`, {id: item.id, newName: item.name}, 'post')
    .then(result => {
      project.getAllProject()
    })
  },
  del (item) {
    httplink('editName', `/project/del`, {id: item.id}, 'post')
    .then(result => {
      project.getAllProject()
    })
  },
  exportZip (item) {
    httplink('exportZipproject', `/exportZip/project`, {
      id: item.id
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  }
})

export default handle

export {
  project
}