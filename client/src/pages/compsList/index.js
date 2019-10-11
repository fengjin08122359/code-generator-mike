import {Handle, DataHandle, httplink, rgData} from 'nclient-microfront';

let {entries} = Object

class CompsList extends DataHandle{
  constructor() {
    super('compsListComp')
    this.list = []
  }
  init () {
    console.log('CompsList init')
    this.get()
  }
  get () {
    httplink('getArrangeList', `/components/getArrangeList`, {}, 'post')
    .then(result => {
      this.list = []
      result.res.forEach(item => {
        var items = JSON.parse(item.list)
        var citems = rgData.componentsClass.resetToComponents(items)
        this.list.push({
          alias: item.alias,
          name: item.id,
          value: citems
        })
      })
    })
  }
  del (id) {
    httplink('getArrangeList', `/components/delArrange`, {id}, 'post')
    .then(result => {
      this.get()
    })
  }
}

let compsList = new CompsList()

let handle = new Handle({
  name: 'compsListComp',
  created () {
    compsList.init()
    console.log('compsList created')
  },
  mounted () {
    console.log('compsList mounted')
  },
})

export default handle

export {
  compsList
}