<template>
  <div id="page-footer" class="page-footer">
    <!-- <el-backtop :target="'.app-wrapper .page-footer .top'" :bottom="100" /> -->
    <!-- body -->
    <div class="top">
      <div class="row row1">
        <img class="lui-logo">
        <div class="slogan"><span>智连接</span><span class="know-world">慧世界</span></div>
      </div>
      <div class="row row2">
        <div class="title more">更多</div>
        <span class="dark-gray">
          <el-link :underline="false" href="#" target="_blank">代理申请</el-link>
        </span>
        <span class="dark-gray">
          <el-link :underline="false" href="#" target="_blank">人才招聘</el-link>
        </span>
      </div>
      <div class="row row3">
        <div class="title about">关于一司</div>
        <span class="dark-gray">
          <el-link :underline="false" href="#" target="_blank">公司介绍</el-link>
        </span>
        <span class="dark-gray">
          <el-link :underline="false" href="#" target="_blank">新闻资讯</el-link>
        </span>
        <span class="dark-gray">
          <el-link :underline="false" href="#" target="_blank">加入一司</el-link>
        </span>
      </div>
      <div class="row row4">
        <div class="title contact">联系方式</div>
        <div class="phoneNumber dark-gray">140-912</div>
        <div class="address dark-gray">HB  GS  TC-11</div>
      </div>
    </div>
    <div class="bottom">
      <span>XXX Technology Limited.</span>
      <span class="ml30">免责声明</span>
      <span class="ml30">隐私权政策</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicFooter',
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
#page-footer{
  padding-top: 65px;
  position: relative;
  margin: 0 auto;
  height: 340px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fafafc;
  .top{
    line-height: 34px;
    font-size: 13px;
    margin: 0 auto;
    width: 1200px;
    height: 150px;
    .row{
      float: left;
      margin-left: 135px;
      .title {color: #b5b8c5;}
      .dark-gray {
        color: #535973;
        display: block;
        height: 34px;
      }
    }
    .row1{
      .lui-logo{
        width: 110px;
        height: 17px;
      }
      .slogan {
        span{ color: #8f94aa; }
        .know-world{ margin-left: 20px; }
      }
      .slogan-en{
        color: #8f94aa;
      }
    }
  }
  .bottom{
    text-align: center;
    line-height: 60px;
    font-size: 12px;
    color: #969bb0;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 60px;
    border-top: 1px solid #edeff5;
    .ml30{
      margin-left: 30px;
    }
  }
}
</style>
