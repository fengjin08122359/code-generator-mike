<template>
  <div class="imgManage">
  </div>
</template>

<script>
import handle, { imgManage } from "./index";
export default {
  name: 'ImgManage',
  data() {
    return {
      imgManage: imgManage
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
