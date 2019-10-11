import {Handle, DataHandle} from 'nclient-microfront';

class Report extends DataHandle{
  constructor() {
    super('reportComp')
    this["comp76500b70-d863-11e9-aeea-e1867e3bec75"] = {"style":{"width":"110px","height":"20px","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"6px","left":"6px"},"raw":{},"type":"ndiv"};
this["comp122366f0-d864-11e9-aeea-e1867e3bec75"] = {"style":{"width":"96%","height":"","border":"1px solid #000","position":"relative","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#E4E4E4","border-top-style":"solid","border-top-width":"1px","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"5px","left":"2px","right":"2%","margin-top":"","padding-top":"10px"},"raw":{},"type":"ndiv"};
this["comp47dbb410-d868-11e9-aeea-e1867e3bec75"] = {"style":{"width":"","height":"","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"200px","left":"0","bottom":"0","right":"0","backgroundColor":"#F5F5F5","overflowX":"auto","overflowY":"auto"},"raw":{},"type":"ndiv"};


  }
  init () {
    console.log('Report init')
  }
}

let report = new Report()

let handle = new Handle({
  name: 'reportComp',
  created () {
    report.init()
    console.log('report created')
  },
  mounted () {
    console.log('report mounted')
  },
})

export default handle

export {
  report
}