# vue-cli

## vue-cli 和 webpack
### 设计原则：vue-cli 之于 webpack
- 约定大约配置
- 封装了webpack
- vue-cli3使用了webpack4
- vue-cli2使用了webpack3

### webpack重要作用
- webpack只能处理js or json，使用各种loader转化文件使webpack可处理
- 再配置plugins拓展各种功能

### vue-cli本质
- 一个启动器

## vue-cli构建

### 安装依赖
- vue
- webpack
- webpack-cli

### vue dist中的文件
- common是遵循commonjs
- esm是遵循import等

### 简单流程
- 编写webpack.config.js
- package.json添加相应执行代码
- 修改webpack.config.js，使之根据当前环境选择打包方式（这部分production bundle名称有问题）
- 打包html --production 失败
	- 使用html-loader
	- 热更新失败
- 添加vue文件，使用vue-loader  vue-html-laoder  vue-template-complie
- 添加vue-loader
- loader使用方式
```
rules: [ { test: /\.css$/, use: ["vue-style-loader", "css-loader"] }  // use可以是数组，由后往前使用 比如这里，先使用css-loader，在使用vue-style-loader
```


1. 配置webpack打包
2. 配置dev和pro打包，使用指令区分
3. 使用html-webpack-loader 自动生成html
4. 编写vue文件，使用vue-loader解析vue   vue-loader  vue-html-laoder  vue-template-complie
5. 编写样式，使用css-loader解析css
	- css-loader      加载外部css
	- vue-style-loader  加载vue中的样式
6. 别名
```
resolve: {
  // 别名
  alias: {
    vue: 'vue/dist/vue.esm'
  },
  // import拓展名可以省略
  extensions: [".vue", ".js", ".json"]
}

```