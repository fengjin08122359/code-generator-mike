<template>
  <div class="compsList">
    <div class="arrangeList">
    <el-input v-model='name'>
      <template slot='prepend'>
        组件名称
      </template>
      <template slot='append'>
        <el-button @click="addArrange">修改组件</el-button>
      </template>
    </el-input>
    <div v-for="(item, index) in filterList" :key="index">
      <el-button-group>
        <el-button>{{item.name}}</el-button>
        <el-button @click="editorArrange(item)">修改</el-button>
        <el-button @click="delArrange(item)">删除</el-button>
      </el-button-group>
    </div>
  </div>
  </div>
</template>

<script>
import '@/components/ele'
import '@/components/normal'
import handle, { compsList } from "./index";
export default {
  name: 'CompsList',
  data() {
    return {
      compsList: compsList,
      name: '',
      filterName: ''
    }
  },
  computed: {
    filterList () {
      return this.compsList.list.filter(item => item.name.indexOf(this.filterName) > -1)
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    refresh () {
      arrangeList.get()
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
    },
    delArrange (item) {
      compsList.del(item.name);
    }
  }
}
</script>

<style>

</style>
