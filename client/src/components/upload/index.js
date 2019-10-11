import {Handle, DataHandle} from 'nclient-microfront';

class Upload extends DataHandle{
  constructor() {
    super('uploadComp')
    
  }
  init () {
    console.log('Upload init')
  }
}

let upload = new Upload()

let handle = new Handle({
  name: 'uploadComp',
  created () {
    upload.init()
    console.log('upload created')
  },
  mounted () {
    console.log('upload mounted')
  },
})

export default handle

export {
  upload
}