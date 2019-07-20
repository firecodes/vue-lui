# vue-lui
vue-lui  业务UI组件库

# 业务 UI 组件
  1. 头部组件
  2. 底部组件
  3. 登录组件

```bash

## npm registry
npm config set registry https://registry.npm.taobao.org

# enter the project directory
cd web-template

# install dependency
npm install

# develop
npm run dev

# lib 
npm run lib
```

This will automatically open http://localhost:8888

# Build

# build for production environment
npm run build:prod
```

# You can axios like this:
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.$http.get(api).then((response) => {
  console.log(response.data)
})