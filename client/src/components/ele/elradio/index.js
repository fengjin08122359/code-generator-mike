import {Handle, DataHandle} from 'nclient-microfront';

class Elradio extends DataHandle{
  constructor() {
    super('elradioComp')
    
  }
  init () {
    console.log('Elradio init')
  }
}

let elradio = new Elradio()

let handle = new Handle({
  name: 'elradioComp',
  created () {
    elradio.init()
    console.log('elradio created')
  },
  mounted () {
    console.log('elradio mounted')
  },
})

export default handle

export {
  elradio
}