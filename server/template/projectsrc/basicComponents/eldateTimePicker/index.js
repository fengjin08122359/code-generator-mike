import {Handle, DataHandle} from 'nclient-microfront';

class EldateTimePicker extends DataHandle{
  constructor() {
    super('eldateTimePickerComp')
    
  }
  init () {
    console.log('EldateTimePicker init')
  }
}

let eldateTimePicker = new EldateTimePicker()

let handle = new Handle({
  name: 'eldateTimePickerComp',
  created () {
    eldateTimePicker.init()
    console.log('eldateTimePicker created')
  },
  mounted () {
    console.log('eldateTimePicker mounted')
  },
})

export default handle

export {
  eldateTimePicker
}