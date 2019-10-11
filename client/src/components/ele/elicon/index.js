import {Handle, DataHandle} from 'nclient-microfront';

class Elicon extends DataHandle{
  constructor() {
    super('eliconComp')
    
  }
  init () {
    console.log('Elicon init')
  }
}

let elicon = new Elicon()

let handle = new Handle({
  name: 'eliconComp',
  created () {
    elicon.init()
    console.log('elicon created')
  },
  mounted () {
    console.log('elicon mounted')
  },
})

export default handle

export {
  elicon
}