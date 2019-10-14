<template>
  <div class="reptable">
    <eltable :rawData='reptable["comped74d520-d8e8-11e9-a0d4-c74a2729b2f5"].raw' :style='reptable["comped74d520-d8e8-11e9-a0d4-c74a2729b2f5"].style'></eltable>


  </div>
</template>

<script>



import handle, { reptable } from "./index";
export default {
  name: 'Reptable',
  data() {
    return {
      reptable: reptable
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
