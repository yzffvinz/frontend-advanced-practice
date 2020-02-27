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
- 修改webpack.config.js，使之根据当前环境选择打包方式