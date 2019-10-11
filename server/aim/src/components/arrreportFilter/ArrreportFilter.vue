<template>
  <div class="arrreportFilter">
    <nlabel :rawData='arrreportFilter["comp8ac7e9b0-d863-11e9-a61c-75267429bad1"].raw' :style='arrreportFilter["comp8ac7e9b0-d863-11e9-a61c-75267429bad1"].style'></nlabel>
<elicon :rawData='arrreportFilter["comp92c8dcf0-d863-11e9-a61c-75267429bad1"].raw' :style='arrreportFilter["comp92c8dcf0-d863-11e9-a61c-75267429bad1"].style'></elicon>


  </div>
</template>

<script>



import handle, { arrreportFilter } from "./index";
export default {
  name: 'ArrreportFilter',
  data() {
    return {
      arrreportFilter: arrreportFilter
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  
}
</script>

<style>

</style>
