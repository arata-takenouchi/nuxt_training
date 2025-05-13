export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // こう書くとvueの全てのエラーを受け取れる（catchされた場合でも受け取る）
  }

  nuxtApp.hook('vue:error', (error, instance, info) => {
    // こちらの場合はcatchされずにtopレベルでエラー発生した場合にtrigeerされる
  })

  nuxtApp.hook('app:error', (error) => {
    // nuxt側のエラーをcatchできる
  })
})