import {Handle, DataHandle} from 'nclient-microfront';

class ArrreportFilter extends DataHandle{
  constructor() {
    super('arrreportFilterComp')
    this["comp8ac7e9b0-d863-11e9-a61c-75267429bad1"] = {"style":{"width":"100px","height":"16px","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"1px","left":"20px","fontSize":"14px","color":"#35B3E2"},"raw":{"text":"筛选查询条件"},"type":"nlabel"};
this["comp92c8dcf0-d863-11e9-a61c-75267429bad1"] = {"style":{"width":"16px","height":"16px","position":"absolute","display":"inline-block","wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"0","left":"0","color":"#35B3E2"},"raw":{"name":"plus"},"type":"elicon"};


  }
  init () {
    console.log('ArrreportFilter init')
  }
}

let arrreportFilter = new ArrreportFilter()

let handle = new Handle({
  name: 'arrreportFilterComp',
  created () {
    arrreportFilter.init()
    console.log('arrreportFilter created')
  },
  mounted () {
    console.log('arrreportFilter mounted')
  },
})

export default handle

export {
  arrreportFilter
}