import {Handle, DataHandle} from 'nclient-microfront';

class ImgManage extends DataHandle{
  constructor() {
    super('imgManageComp')
    
  }
  init () {
    console.log('ImgManage init')
  }
}

let imgManage = new ImgManage()

let handle = new Handle({
  name: 'imgManageComp',
  created () {
    imgManage.init()
    console.log('imgManage created')
  },
  mounted () {
    console.log('imgManage mounted')
  },
})

export default handle

export {
  imgManage
}