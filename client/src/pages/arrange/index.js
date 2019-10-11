import {Handle, DataHandle, httplink, rgData, logger} from 'nclient-microfront';

class Arrange extends DataHandle{
  constructor() {
    super('arrangeComp')
    this.id = ''
    this.alias = ''
    this.show = true
  }
  init () {
    console.log('Arrange init')
  }
  save () {
    httplink('saveArrange', `/components/saveArrange`, {
      id: this.id,
      alias: this.alias,
      list: JSON.stringify(rgData.componentsClass.getSaveableList())
    }, 'post')
    .then(result => {

    })
  }
  exportZip () {
    httplink('exportZipcomponent', `/exportZip/component`, {
      id: this.id
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  }
  exportJSON () {
    logger.saveTextAs(JSON.stringify(rgData.componentsClass.getSaveableList()),  this.id + '.json')
  }
  importJSON (json) {
    rgData.componentsClass.setList(json)
  }
}

let arrange = new Arrange()

let handle = new Handle({
  name: 'arrangeComp',
  created () {
    arrange.init()
    console.log('arrange created')
  },
  mounted () {
    console.log('arrange mounted')
  },
  switchRoute (id) {
    arrange.id = id;
    httplink('getArrange', `/components/getArrange`, {id}, 'post')
    .then(result => {
      console.log(result)
      arrange.alias = result.res.alias
      if (result.res.list) {
        rgData.componentsClass.setList(JSON.parse(result.res.list))
      } else {
        rgData.componentsClass.setList([])
      }
    })
  },
})

export default handle

export {
  arrange
}