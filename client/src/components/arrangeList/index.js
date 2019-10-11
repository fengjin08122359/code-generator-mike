import {Handle, DataHandle, rgData, httplink} from 'nclient-microfront';

let {entries} = Object

class ArrangeList extends DataHandle{
  constructor() {
    super('arrangeListComp')
    this.list = []
  }
  init () {
    console.log('ArrangeList init')
    this.get();
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
}

let arrangeList = new ArrangeList()

let handle = new Handle({
  name: 'arrangeListComp',
  created () {
    console.log('arrangeList created')
  },
  mounted () {
    arrangeList.init()
    console.log('arrangeList mounted')
  },
})

export default handle

export {
  arrangeList
}