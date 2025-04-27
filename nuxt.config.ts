// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    // autoImport: false // defaultでtrue、falseにするとauto import が全て無効になる
    scan: false // こっちをfalseにすると、composablesなどのカスタム前提の機能は自動importされなくなる
  }
})
