<template>
  <div id="header" class="lui-header fixed ceiling  white">
    <div class="lui-logo">
      <a href="/"><span class="lui-icon-logo" /></a>
    </div>
    <el-menu class="menu-nav" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3">技术优势</el-menu-item>
      <el-menu-item index="4">渠道合作</el-menu-item>
      <el-menu-item index="5">私人定制</el-menu-item>
      <el-menu-item index="6">新闻资讯</el-menu-item>
      <el-submenu index="7">
        <template slot="title">关于一司</template>
        <el-menu-item index="7-1">公司介绍</el-menu-item>
        <el-menu-item index="7-2">加入我们</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="top-nav-r">
      <div class="user">
        <el-popover placement="bottom" title="" width="200" trigger="hover" content="11">
          <el-avatar class="user-avatar" slot="reference" icon="el-icon-user-solid">user </el-avatar>
        </el-popover>
      </div>
    </div>
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

<style lang="scss" scoped>
#header{
  height: 60px;
  -webkit-box-shadow: 0 3px 8px rgba(0,0,0,.2);
  box-shadow: 0 3px 8px rgba(0,0,0,.2);
  background-color: #fff;
  &:after{
    clear: both;
  }
  &.fixed{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    color: #d0eae9;
    font-size: 14px;
  }
  &.ceiling{
    padding: 0px 30px;
  }
  &.scroll-fix {
    -webkit-box-shadow: 0 3px 8px rgba(0,0,0,.2);
    box-shadow: 0 3px 8px rgba(0,0,0,.2);
    background-color: #fff;
  }
}
.lui-logo{
  display: inline-block;
  position: relative;
  float: left;
  width: 227px;
  padding-left: 20px;
  line-height: 60px;
  height: 60px;
  .lui-icon-logo{
    height: 30px;
    margin-top: 12px;
    color: #fff;
    display: block;
    width: 150px;
  }
}
.menu-nav{
  display: inline-block;
  min-width: 300px;
  max-width: 700px;
}
.top-nav-r{
  font-size: 12px;
  color: #eff4fe;
  float: right;
  line-height: 50px;
  height: 60px;
  &:after{
    clear: both;
  }
  .user-avatar{
    margin-top: 10px;
  }
}
</style>
