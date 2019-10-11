<template>
  <div class="report">
    <ndiv :rawData='report["comp76500b70-d863-11e9-aeea-e1867e3bec75"].raw' :style='report["comp76500b70-d863-11e9-aeea-e1867e3bec75"].style'><ArrreportFilter></ArrreportFilter></ndiv>
<ndiv :rawData='report["comp122366f0-d864-11e9-aeea-e1867e3bec75"].raw' :style='report["comp122366f0-d864-11e9-aeea-e1867e3bec75"].style'><ArrreportInputs></ArrreportInputs></ndiv>
<ndiv :rawData='report["comp47dbb410-d868-11e9-aeea-e1867e3bec75"].raw' :style='report["comp47dbb410-d868-11e9-aeea-e1867e3bec75"].style'><ArrreportTable></ArrreportTable></ndiv>


  </div>
</template>

<script>

import ArrreportFilter from '@/components/arrreportFilter/ArrreportFilter'
import ArrreportInputs from '@/components/arrreportInputs/ArrreportInputs'
import ArrreportTable from '@/components/arrreportTable/ArrreportTable'


import handle, { report } from "./index";
export default {
  name: 'Report',
  data() {
    return {
      report: report
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components:{ArrreportFilter,ArrreportInputs,ArrreportTable}
}
</script>

<style>

</style>
