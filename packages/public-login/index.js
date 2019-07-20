import publicLogin from './src/index.vue'

// 全局 注册单个组件
publicLogin.install = function(Vue) {
  Vue.component(publicLogin.name, publicLogin)
  return Vue
}

export default publicLogin
