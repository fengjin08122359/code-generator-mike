import {Handle, DataHandle} from 'nclient-microfront';

class Ndiv extends DataHandle{
  constructor() {
    super('ndivComp')
    
  }
  init () {
    console.log('Ndiv init')
  }
}

let ndiv = new Ndiv()

let handle = new Handle({
  name: 'ndivComp',
  created () {
    ndiv.init()
    console.log('ndiv created')
  },
  mounted () {
    console.log('ndiv mounted')
  },
})

export default handle

export {
  ndiv
}