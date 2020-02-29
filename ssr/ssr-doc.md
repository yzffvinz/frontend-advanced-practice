# VUE-SSR官方文档学习
[官方文档地址]: https://ssr.vuejs.org/guide
## 1.  client 和 ssr的区别

- Data Reactivity是默认关闭的
- 钩子函数的执行
  - [x] beforeCreate、created在server执行
  - [ ] 其他钩子函数在client执行（目前这些钩子函数也未在客户端执行，奇怪）
- 访问特定平台的api：server和client的api差异，一些库已经做了兼容，许多地方需要自己做兼容

  - 例：window、document在server侧不用
- 自定义指令

  - 指令大多数是直接操作dom的，因此如果操作dom在SSR过程会出现错误，解决方式：

    - 在vdom层级操作
    - 创建一个server-side-version 的 [directives]: https://ssr.vuejs.org/api/#directives
- 关于单例模式
- ssr单例模式会导致不同客户端请求引起实例污染，建议使用工厂方法
  - 客户端在客户端的浏览器运行，无影响

# 2. 