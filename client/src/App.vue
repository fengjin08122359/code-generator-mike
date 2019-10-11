<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
html,body,#app{
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>
