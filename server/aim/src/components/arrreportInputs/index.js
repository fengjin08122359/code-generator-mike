import {Handle, DataHandle} from 'nclient-microfront';

class ArrreportInputs extends DataHandle{
  constructor() {
    super('arrreportInputsComp')
    this["comp432813e0-d864-11e9-ae4d-059fb1565320"] = {"style":{"width":"45%","height":"40px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"0","left":"0","margin-left":"2.5%","margin-right":"2.5%","padding-left":"","padding-right":"","boxSizing":"border-box"},"raw":{},"type":"ndiv"};
this["comp4fc22c60-d866-11e9-ae4d-059fb1565320"] = {"style":{"width":"45%","height":"40px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"0","left":"0","margin-left":"2.5%","margin-right":"2.5%","padding-left":"","padding-right":"","boxSizing":"border-box"},"raw":{},"type":"ndiv"};
this["comp505ae9f0-d866-11e9-ae4d-059fb1565320"] = {"style":{"width":"45%","height":"40px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"0","left":"","right":"0","margin-left":"2.5%","margin-right":"2.5%","padding-left":"","padding-right":"","boxSizing":"border-box"},"raw":{},"type":"ndiv"};
this["comp50aa4270-d866-11e9-ae4d-059fb1565320"] = {"style":{"width":"45%","height":"40px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"","left":"","right":"","margin-left":"2.5%","margin-right":"2.5%","padding-left":"","padding-right":"","boxSizing":"border-box"},"raw":{},"type":"ndiv"};
this["comp515b42f0-d866-11e9-ae4d-059fb1565320"] = {"style":{"width":"45%","height":"40px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"0","left":"0","margin-left":"2.5%","margin-right":"2.5%","padding-left":"","padding-right":"","boxSizing":"border-box"},"raw":{},"type":"ndiv"};
this["comp0bc6a670-d867-11e9-ae4d-059fb1565320"] = {"style":{"wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"10px","border-top-right-radius":"10px","border-bottom-left-radius":"10px","border-bottom-right-radius":"10px","left":"2.5%","display":"inline-block","position":"relative","verticalAlign":"top"},"raw":{"text":"确定","type":{"value":"warning","options":["","primary","success","info","warning","danger"],"type":"array"},"plain":false},"type":"elbutton"};
this["comp7a6bff80-d867-11e9-a841-af07bcc0b781"] = {"style":{"wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"10px","border-top-right-radius":"10px","border-bottom-left-radius":"10px","border-bottom-right-radius":"10px","left":"5%","display":"inline-block","position":"relative","verticalAlign":"top","top":"0"},"raw":{"text":"取消","type":{"value":"primary","options":["","primary","success","info","warning","danger"],"type":"array"},"plain":false},"type":"elbutton"};


  }
  init () {
    console.log('ArrreportInputs init')
  }
}

let arrreportInputs = new ArrreportInputs()

let handle = new Handle({
  name: 'arrreportInputsComp',
  created () {
    arrreportInputs.init()
    console.log('arrreportInputs created')
  },
  mounted () {
    console.log('arrreportInputs mounted')
  },
})

export default handle

export {
  arrreportInputs
}