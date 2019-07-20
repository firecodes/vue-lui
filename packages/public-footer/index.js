import publicFooter from './src/index.vue'

// 全局 注册单个组件
publicFooter.install = function(Vue) {
  Vue.component(publicFooter.name, publicFooter)
  return Vue
}

export default publicFooter
