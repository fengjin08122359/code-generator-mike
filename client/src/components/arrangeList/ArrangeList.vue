<template>
  <div class="arrangeList">
    <el-input v-model='name'>
      <template slot='prepend'>
        组件名称
      </template>
      <template slot='append'>
        <el-button @click="addArrange">修改组件</el-button>
      </template>
    </el-input>
    <el-col>当前子组件: {{childrenName}} <el-button @click="refreshChild">刷新子组件</el-button><el-button @click="clearChild">清理</el-button></el-col>
    <el-col><el-input v-model='filterName'>
      <template slot='prepend'>
        筛选
      </template>
      <template slot='append'>
        <span @click="refresh">刷新组件</span>
      </template>
    </el-input></el-col>
    
    <div v-for="(item, index) in filterList" :key="index">
      <el-button-group>
        <el-button @click="saveChildren(item)">{{item.name}}</el-button>
        <el-button @click="editorArrange(item)">修改</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
  import handle, {
    arrangeList
  } from "./index";
  import {
    components
  } from '@/sdk/components'
  export default {
    name: 'ArrangeList',
    data() {
      return {
        components: components,
        arrangeList: arrangeList,
        name: '',
        filterName: ''
      }
    },
    computed: {
      active() {
        return this.components.active[0] || null
      },
      childrenName () {
        return this.active ? this.active.childrenName : ''
      },
      filterList () {
        return this.arrangeList.list.filter(item => item.name.indexOf(this.filterName) > -1)
      }
    },
    created() {
      handle.created()
    },
    mounted() {
      handle.mounted()
    },
    methods: {
      saveChildren(item) {
        if (this.active) {
          this.active.saveChildren(item.name)
        }
      },
      refreshChild () {
        if (this.active) {
          this.active.getChildFromServer()
        }
      },
      refresh () {
        arrangeList.get()
      },
      clearChild () {
        if (this.active) {
          this.active.childrenName = ''
          this.active.children = [];
        }
      },
      addArrange() {
        if (this.name != '') {
          let routeData = this.$router.resolve({
            path: `/Arrange/arr${this.name}`
          });;
          window.open(routeData.href, '_blank')
        }
      },
      editorArrange (item) {
        if (item.name != '') {
          let routeData = this.$router.resolve({
            path: `/Arrange/${item.name}`
          });;
          window.open(routeData.href, '_blank')
        }
      }
    },
  }
</script>

<style>

</style>