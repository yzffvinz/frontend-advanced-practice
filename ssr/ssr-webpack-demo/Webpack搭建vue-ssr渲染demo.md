# Webpack搭建vue-ssr渲染demo

## 1.  创建基础配置

- 基础使用包含vue-loader 和 vue-template-compiler，使用rules时要添加

  ```js
  // 引入plugin
  const VueLoaderPlugin = require('vue-loader/lib/plugin')
  // 添加rules
  { test: /\.vue$/, use: 'vue-loader' }
  // 添加相应plugin
  plugins: [
    new VueLoaderPlugin()
  ]
  ```

- 添加手动html plugin生成的html文件



## 2. 

## 99. 疑惑

### 1. 入口

- vendors

### 2.  