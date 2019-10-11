import {Handle, DataHandle} from 'nclient-microfront';

class Elswitch extends DataHandle{
  constructor() {
    super('elswitchComp')
    
  }
  init () {
    console.log('Elswitch init')
  }
}

let elswitch = new Elswitch()

let handle = new Handle({
  name: 'elswitchComp',
  created () {
    elswitch.init()
    console.log('elswitch created')
  },
  mounted () {
    console.log('elswitch mounted')
  },
})

export default handle

export {
  elswitch
}