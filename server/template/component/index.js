import {Handle, DataHandle} from 'nclient-microfront';

class Component extends DataHandle{
  constructor() {
    super('componentComp')
    /* data start */
    /* data end */
  }
  init () {
    console.log('Component init')
  }
}

let component = new Component()

let handle = new Handle({
  name: 'componentComp',
  created () {
    component.init()
    console.log('component created')
  },
  mounted () {
    console.log('component mounted')
  },
})

export default handle

export {
  component
}