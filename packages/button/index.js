import Button from './src/index.vue'

// 全局 注册单个组件
Button.install = function(Vue) {
  Vue.component(Button.name, Button)
  return Vue
}

export default Button
