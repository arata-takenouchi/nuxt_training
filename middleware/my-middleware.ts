export default defineNuxtRouteMiddleware((to, from) => {
  // SSRの場合、middlewareはデフォルトでサーバー側のレンダリング時とクライアント側で実行される
  // クライアント側では実行されないようにする場合
  if (import.meta.client) return

  // サーバー側のレンダリング時に実行されないようにする場合
  if (import.meta.server) return

  // 最初のクライアント側の読み込み時のみ実行されないようにする場合
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  if (to.params.id === '1') {
    // navigation中止の組み込み関数
    return abortNavigation()
  }

  if (to.path !== '/') {
    // redirectの組み込み関数
    return navigateTo('/')
  }

    // returnを省略してもnavigationは終了する
  return
})