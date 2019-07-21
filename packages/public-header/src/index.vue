<template>
  <div class="lui-header">
    <div class="lui-logo" />
    <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'PublicHeader',
  props: { },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect() {}
  }
}
</script>
