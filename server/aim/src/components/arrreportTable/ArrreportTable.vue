<template>
  <div class="arrreportTable">
    <eltable :rawData='arrreportTable["comped74d520-d8e8-11e9-a0d4-c74a2729b2f5"].raw' :style='arrreportTable["comped74d520-d8e8-11e9-a0d4-c74a2729b2f5"].style'></eltable>


  </div>
</template>

<script>



import handle, { arrreportTable } from "./index";
export default {
  name: 'ArrreportTable',
  data() {
    return {
      arrreportTable: arrreportTable
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
