<template>
  <el-menu
    class="menu"
    background-color="#2D4156"
    text-color="#BFCBD9"
    active-text-color="#409EFF"
    :default-active="activeIndex"
    :collapse="isCollapse"
    @select="selectItem"
  >
    <template v-for="route in routes" :key="route.path" >
      <slide-item v-if="route.children" :activeIndex="activeIndex" :item="route"></slide-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { nextTick, reactive, ref, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import SlideItem from './components/slide-item.vue'

interface StateType {
  menuRefs: any[],
  activeIndex: string
}

export default {
  components: {
    SlideItem
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const { routes } = toRefs(store.state.app)

    const { isCollapse } = toRefs(store.state.app)

    const state: StateType = reactive({
      menuRefs: [],
      activeIndex: '/dashboard'
    })

    const selectItem = (index: string) => {
      state.activeIndex = index
      const target = routes.value.find((route: any) => {
        const routePath = route.children ? route.children[0].path : route.path
        return routePath === index
      }) || { meta: null }
      const title = target.meta ? target.meta.title === '首页' ? '' : target.meta.title : ''
      store.dispatch('app/setNavbarTitle', title)
      router.push({ path: index })
    }


    watch(() => route.path, path => {
      setPah(path)
    })

    const setPah = (path: string) => {
      state.activeIndex = path
    }
    setPah(route.path)
    
    return {
      ...toRefs(state),
      isCollapse,
      routes,
      selectItem
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  height: 100%;
}
.el-menu--collapse {
  width: 64px;
}
.submenu {
  & /deep/ .el-menu-item, & /deep/ .inner-submenu .el-submenu__title {
    background-color: #1f2d3d !important;
  }
}
</style>