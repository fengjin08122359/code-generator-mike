<template>
  <div class="arrange">
    <div class='design-view'>
      <Editor :target='arrange'></Editor>
    </div>
    <div class='design-manage'>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="组件列表" name="first">
          basic:
          <Normal></Normal>
          element-UI
          <Ele></Ele>
        </el-tab-pane>
        <el-tab-pane label="属性管理" name="second" :disabled="!active">
          <StyleControl></StyleControl>
        </el-tab-pane>
        <el-tab-pane label="子组件" name="third" :disabled="!isNdiv">
          <ArrangeList></ArrangeList>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Normal from "../../components/normal/Normal";
import ArrangeList from "../../components/arrangeList/ArrangeList";
import Ele from "../../components/ele/Ele";
import Editor from "../../components/editor/Editor";
import StyleControl from "../../components/styleControl/StyleControl";
import handle, { arrange } from "./index";
import {components} from '@/sdk/components'
export default {
  name: 'Arrange',
  data() {
    return {
      arrange: arrange,
      components: components,
      activeName: "first"
    }
  },
  computed: {
    active () {
      return this.components.active[0] || null
    },
    isNdiv () {
      return this.active && this.components.active[0].type == 'ndiv'
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  activated() {
    handle.switchRoute(this.$route.params.id)
  },
  watch: {
    active (val) {
      if (!val && this.activeName != 'first') {
        this.activeName = 'first'
      }
    },
    isNdiv (val) {
      if (!val && this.activeName == 'third') {
        this.activeName = 'first'
      }
    }
  },
  components: {
    Normal,
    Editor,
    StyleControl,
    Ele,
    ArrangeList
  }
}
</script>

<style scoped lang='less'>
.arrange{
  position: fixed;
  width: 100%;
  height: 100%;
  .design-view {
    position: absolute;
    left:0;
    right:30%;
    top:0;
    bottom:0;
    overflow: hidden;
  }
  .design-manage {
    position: absolute;
    left:70%;
    right:0;
    top:0;
    bottom:0;
    overflow: auto;
  }
}
</style>
