import {changeTitle, rgHandle, rgData} from 'nclient-microfront'
import './components'

window.rgHandle = rgHandle
window.rgData = rgData

export default {
  init () {
    document.title = '代码生成器'
    changeTitle.init()
  }
}