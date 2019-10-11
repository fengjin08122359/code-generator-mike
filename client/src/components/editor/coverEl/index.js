import {Handle, DataHandle} from 'nclient-microfront';

class CoverEl extends DataHandle{
  constructor() {
    super('coverElComp')
    
  }
  init () {
    console.log('CoverEl init')
  }
}

let coverEl = new CoverEl()

let handle = new Handle({
  name: 'coverElComp',
  created () {
    coverEl.init()
    console.log('coverEl created')
  },
  mounted () {
    console.log('coverEl mounted')
  },
})

export default handle

export {
  coverEl
}