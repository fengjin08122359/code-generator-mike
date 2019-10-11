import {Handle, DataHandle} from 'nclient-microfront';

class Elimage extends DataHandle{
  constructor() {
    super('elimageComp')
    
  }
  init () {
    console.log('Elimage init')
  }
}

let elimage = new Elimage()

let handle = new Handle({
  name: 'elimageComp',
  created () {
    elimage.init()
    console.log('elimage created')
  },
  mounted () {
    console.log('elimage mounted')
  },
})

export default handle

export {
  elimage
}