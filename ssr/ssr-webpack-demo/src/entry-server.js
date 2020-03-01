import { createApp } from './app'

export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    // 跳转到首屏
    router.push(context.url)

    router.onReady(() => {
      // 因为上方设置了服务器端的router，所以这里会根据上方设置的context.url找到对应的components
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        resolve({ code: 404 })
      }
      resolve(app)
    }, reject)
  })
}