// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // 環境変数の設定
  // .env内の「NUXT_」のprefixがついた項目を読み込み、対応するruntimeConfig内の設定値がオーバーライドされる形になる
  runtimeConfig: {
    // デフォルトではサーバー側のみで読み込まれる
    apiSecret: '123',
    // public配下かapp配下での設定はクライアント側でも利用可能
    public: {
      apiBaseURL: '/api'
    },
    app: {
      // apiBaseURL: '/api'
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss',
  ],
  // components: {
  //   dirs: []
  // }
  // imports: {
  //   autoImport: false // defaultでtrue、falseにするとauto import が全て無効になる
  //   scan: false // こっちをfalseにすると、composablesなどのカスタム前提の機能は自動importされなくなる
  // }
})
