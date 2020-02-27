## 项目做了什么
### 简单的vue全家桶大家都会用，所以要说一些亮点，性能加载
- 说一些尖端技术
    - ssr 首屏优化，seo优化
    - 多端开发 同步到app，构建app
- 优化实践
    - webpack配置，dll优化
    - webwork并发渲染
- 项目的基础支持
    - 

- 初级： 用了vue，使用了vuex vue-router和axios；
- 首屏加速
- 数据懒加载
- seo
- 需要会使用node
### ssr(服务端渲染)
- 首屏加载加速
- 做seo
### ssr特性
- 每次访问会新建一个vue实例
- 生命周期方法只会在server端，仅会执行beforeCreate和created
### 组件依赖
- vue
- vue-server-render


### 进行基础的ssr练习

### 整合到vue-cli构建的
1. 添加index.html和index.ssr.html(需要一个ssr的注释)
```
<xxx>
<script src="<%= htmlWebapxxx">
这个变量是html webpack plugin配置的地址
```
2. 添加router，一定要使用history模式，使用函数式创建路由
3. 打包入口修改server.js以及clinet.js
4. main.js改造，createApp
5. client.js
- 从main.js 获取 路由  app，
- router.onReady(() => { 挂载app })
6. server.js
- export  context=> return promise().then(app, router = createApp   router.push(context.url) router.onready.then() {
	context.url in routers? router.getMatchedComponents()
		no ? 404;
		yes? render;
})
7. 打包配置（两者都是基于webpack product配置）
- client
```
// webpack-client
entry: {
  app: './src/client.js
}
// 去掉output
// 删除代码分割 commons.trunck
// 压缩代码删除
// 新增插件 vueSsrClientPlugins   vue-server-renderer/client
new vueSsrClientPlugins()

```
-  server
```
// webpack-server
// 首先同上进行更改
// 新增target=> 
target: 'node',
output: {
  library: 'commonjs2'
}
// 修改HtmlWebpackPlugin
template: index.ssr.html
inject: false
files: {
  js: 'app.js'
}

// 删除minify

// vueSsrServerPlugins vue-server-renderer/server
new vueSsrServerPlugins
```
8. 打包配置
- build:client:  "webpack --config  client-config"
- build:server:  "webpack --config  server-config"

### 创建server
1. 引入打包成果的json
2. 分两部分render
- 一部分使用客户端
- 一部分使用服务端
3. 根据路由地址选择renderer
4. 尝试使用流


### ssr的个人理解
- ssr会创建若干个vue实例，前端一个vue实例;如果路由实例在router中，渲染ssr的vue实例，如果不是