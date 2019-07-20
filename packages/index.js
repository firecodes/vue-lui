/* eslint-disable */
import Button from './button';

const version = '0.0.1-dev';

const components = [
  Button
];

const install = Vue => {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.forEach(Component => {
        Vue.use(Component);
    });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button
};

export default {
  install,
  version
};
