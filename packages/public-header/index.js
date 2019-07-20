import publicHeader from './src/index.vue'

// 全局 注册单个组件
publicHeader.install = function(Vue) {
  Vue.component(publicHeader.name, publicHeader)
  return Vue
}

export default publicHeader
