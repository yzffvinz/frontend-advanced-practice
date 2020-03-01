import { createApp } from './app'

//  客户端引导逻辑
const { app, router } = createApp()

// 挂载到id=app的dom
router.onReady(() => {
  app.$mount('#app')
})
