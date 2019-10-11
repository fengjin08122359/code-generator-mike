<template>
  <div class="arrreportInputs">
    <ndiv :rawData='arrreportInputs["comp432813e0-d864-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp432813e0-d864-11e9-ae4d-059fb1565320"].style'><ArrreportInput></ArrreportInput></ndiv>
<ndiv :rawData='arrreportInputs["comp4fc22c60-d866-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp4fc22c60-d866-11e9-ae4d-059fb1565320"].style'><ArrreportInput></ArrreportInput></ndiv>
<ndiv :rawData='arrreportInputs["comp505ae9f0-d866-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp505ae9f0-d866-11e9-ae4d-059fb1565320"].style'><ArrreportInput></ArrreportInput></ndiv>
<ndiv :rawData='arrreportInputs["comp50aa4270-d866-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp50aa4270-d866-11e9-ae4d-059fb1565320"].style'><ArrreportInput></ArrreportInput></ndiv>
<ndiv :rawData='arrreportInputs["comp515b42f0-d866-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp515b42f0-d866-11e9-ae4d-059fb1565320"].style'><ArrreportInput></ArrreportInput></ndiv>
<elbutton :rawData='arrreportInputs["comp0bc6a670-d867-11e9-ae4d-059fb1565320"].raw' :style='arrreportInputs["comp0bc6a670-d867-11e9-ae4d-059fb1565320"].style'></elbutton>
<elbutton :rawData='arrreportInputs["comp7a6bff80-d867-11e9-a841-af07bcc0b781"].raw' :style='arrreportInputs["comp7a6bff80-d867-11e9-a841-af07bcc0b781"].style'></elbutton>


  </div>
</template>

<script>

import ArrreportInput from '@/components/arrreportInput/ArrreportInput'
import ArrreportInput from '@/components/arrreportInput/ArrreportInput'
import ArrreportInput from '@/components/arrreportInput/ArrreportInput'
import ArrreportInput from '@/components/arrreportInput/ArrreportInput'
import ArrreportInput from '@/components/arrreportInput/ArrreportInput'


import handle, { arrreportInputs } from "./index";
export default {
  name: 'ArrreportInputs',
  data() {
    return {
      arrreportInputs: arrreportInputs
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components:{ArrreportInput,ArrreportInput,ArrreportInput,ArrreportInput,ArrreportInput}
}
</script>

<style>

</style>
