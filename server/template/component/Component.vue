<template>
  <div class="component">
    <!-- template start -->
    <!-- template end -->
  </div>
</template>

<script>
/* import start */
/* import end */
import handle, { component } from "./index";
export default {
  name: 'Component',
  data() {
    return {
      component: component
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  /* comp start */
  /* comp end */
}
</script>

<style>

</style>
