<template>
  <div class="upload">
     <el-upload
      :action="actionUrl"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :data='data'>
      上传文件
    </el-upload>
  </div>
</template>

<script>
import handle, { upload } from "./index";
export default {
  name: 'Upload',
  data() {
    return {
      action: '/uploadFile/img',
      upload: upload
    }
  },
  props: ["url", 'data'],
  computed: {
    actionUrl () {
      return this.url || this.action
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    handleAvatarSuccess (res) {
      console.log(res)
      this.$emit('uploadChange', res)
    }
  },
}
</script>

<style>

</style>
