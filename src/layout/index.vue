<template>
  <el-container class="wrapper">
    <el-aside class="wrapper-aside">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container class="wrapper-main">
      <el-header>
        <top-navbar></top-navbar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import NavMenu from './components/nav-menu/index.vue'
import TopNavbar from './components/top-navbar/index.vue'

export default {
  components: {
    NavMenu,
    TopNavbar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  &-aside {
    width: auto !important;
    height: 100%;
    overflow-x: hidden;
  }
  .el-header {
    padding: 0;
  }
  .el-main {
    padding: 0;
    width: 100%;
    overflow: hidden;
  }
}
</style>