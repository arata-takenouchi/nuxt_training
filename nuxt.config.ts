// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // 個別にprerenderのon/offを設定することも可能
    '/user/1': { prerender: true },
    '/user/2': { prerender: false },
  },
  nitro: {
    prerender: {
      // prerenderしないルートを指定
      // routes: ["/user/1", "/user/2"],
      // ignore: ["/dynamic"],
      // クローラーが検出できないルートを指定することもできる
      crawlLinks: true,
      routes: ["/sitemap.xml", "robots.txt"]
    }
  },
  // ssr: false, // SSRを無効にすることもできる
  // routeRules: {
  //   // 個別に設定することも可能
  //   '/api/**': { cors: true }, // 自動的にCORSヘッダーを追加
  //   '/admin/**': { ssr: false } ,
  // },
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
      head: {
        // site title
        title: 'App Title',
        // 言語設定
        htmlAttrs: {
          lang: 'es',
        },
        // おそらくfavicon
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        // 文字コードとviewportの設定もできる
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
      }
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
