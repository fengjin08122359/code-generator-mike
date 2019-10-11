<template>
  <div class="ndiv">
    <slot></slot>
  </div>
</template>

<script>
import handle, { ndiv } from "./index";
export default {
  name: 'ndiv',
  data() {
    return {
      ndiv: ndiv,
      style: {width: 100, height: 50, "border": "1px solid #000", position: 'relative',display:"inline-block", "box-sizing":"border-box"}
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
