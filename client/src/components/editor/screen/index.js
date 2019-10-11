import {Handle, DataHandle, rgData, httplink} from 'nclient-microfront';
class Screen extends DataHandle{
  constructor() {
    super('screenComp')
    this.zoom = 1
  }
  init () {
    console.log('Screen init')
  }
}

let screen = new Screen()

let handle = new Handle({
  name: 'screenComp',
  created () {
    screen.init()
    console.log('screen created')
  },
  mounted () {
    console.log('screen mounted')
  },
  setZoom(val) {
    screen.zoom = val
  }
})

export default handle

export {
  screen
}