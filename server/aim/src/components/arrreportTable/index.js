import {Handle, DataHandle} from 'nclient-microfront';

class ArrreportTable extends DataHandle{
  constructor() {
    super('arrreportTableComp')
    this["comped74d520-d8e8-11e9-a0d4-c74a2729b2f5"] = {"style":{"wordBreak":"break-all","box-sizing":"border-box","border-left-color":"#000","border-left-style":"solid","border-left-width":"0","border-right-color":"#000","border-right-style":"solid","border-right-width":"0","border-top-color":"#000","border-top-style":"solid","border-top-width":"0","border-bottom-color":"#000","border-bottom-style":"solid","border-bottom-width":"0","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","top":"2%","left":"2%","bottom":"2%","right":"2%","width":"auto","height":"auto","position":"absolute","overflowY":"auto","overflowX":"auto"},"raw":{"table":{"data":[{"date":"2016-05-02","name":"王小虎","replyMsg":"111","isqc":"222","requestTime":"3333","visitorId":"1","visitorName":"2","departmentPk":"2"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"},{"isqc":"是否质检","replyMsg":"主动对话","requestTime":"请求时间","visitorId":"访客ID","visitorName":"访客昵称","departmentPk":"业务类型"}],"col":[{"prop":"isqc","label":"是否质检","width":120},{"prop":"replyMsg","label":"主动对话","width":120},{"prop":"requestTime","label":"请求时间","width":"120"},{"prop":"visitorId","label":"访客ID","width":"120"},{"prop":"visitorName","label":"访客昵称","width":"120"},{"prop":"departmentPk","label":"业务类型","width":"120"}],"type":"table"}},"type":"eltable"};


  }
  init () {
    console.log('ArrreportTable init')
  }
}

let arrreportTable = new ArrreportTable()

let handle = new Handle({
  name: 'arrreportTableComp',
  created () {
    arrreportTable.init()
    console.log('arrreportTable created')
  },
  mounted () {
    console.log('arrreportTable mounted')
  },
})

export default handle

export {
  arrreportTable
}