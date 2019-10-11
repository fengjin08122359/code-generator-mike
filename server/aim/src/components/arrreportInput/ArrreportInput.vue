<template>
  <div class="arrreportInput">
    <elinput :rawData='arrreportInput["comp4caf5900-d864-11e9-b3c7-79719077f1cd"].raw' :style='arrreportInput["comp4caf5900-d864-11e9-b3c7-79719077f1cd"].style'></elinput>
<nlabel :rawData='arrreportInput["comp5179d960-d864-11e9-b3c7-79719077f1cd"].raw' :style='arrreportInput["comp5179d960-d864-11e9-b3c7-79719077f1cd"].style'></nlabel>
<elicon :rawData='arrreportInput["comp55f1f400-d864-11e9-b3c7-79719077f1cd"].raw' :style='arrreportInput["comp55f1f400-d864-11e9-b3c7-79719077f1cd"].style'></elicon>


  </div>
</template>

<script>



import handle, { arrreportInput } from "./index";
export default {
  name: 'ArrreportInput',
  data() {
    return {
      arrreportInput: arrreportInput
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
