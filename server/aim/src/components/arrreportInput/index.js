import {Handle, DataHandle} from 'nclient-microfront';

class ArrreportInput extends DataHandle{
  constructor() {
    super('arrreportInputComp')
    this["comp4caf5900-d864-11e9-b3c7-79719077f1cd"] = {"style":{"wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"50%","border-top-right-radius":"50%","border-bottom-left-radius":"50%","border-bottom-right-radius":"50%","top":"0","left":"60px","right":"40px","width":"auto","height":"40px","position":"absolute"},"raw":{"text":"","placeholder":"input","disabled":false,"size":{"value":"","options":["","medium","small","mini"],"type":"array"},"type":"","resize":{"value":"","options":["","none","both","horizontal","vertical"],"type":"array"},"autofocus":false,"append":"","prepend":""},"type":"elinput"};
this["comp5179d960-d864-11e9-b3c7-79719077f1cd"] = {"style":{"width":"50px","height":"40px","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"50%","border-top-right-radius":"50%","border-bottom-left-radius":"50%","border-bottom-right-radius":"50%","top":"0px","left":"5px","lineHeight":"40px","color":"#666666","fontSize":"12px"},"raw":{"text":"名称"},"type":"nlabel"};
this["comp55f1f400-d864-11e9-b3c7-79719077f1cd"] = {"style":{"width":"12px","height":"12px","position":"absolute","display":"inline-block","wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"50%","border-top-right-radius":"50%","border-bottom-left-radius":"50%","border-bottom-right-radius":"50%","top":"13px","left":"","right":"11px","backgroundColor":"#CCCCCC","color":"#FFFFFF","fontSize":"12px"},"raw":{"name":"minus"},"type":"elicon"};


  }
  init () {
    console.log('ArrreportInput init')
  }
}

let arrreportInput = new ArrreportInput()

let handle = new Handle({
  name: 'arrreportInputComp',
  created () {
    arrreportInput.init()
    console.log('arrreportInput created')
  },
  mounted () {
    console.log('arrreportInput mounted')
  },
})

export default handle

export {
  arrreportInput
}