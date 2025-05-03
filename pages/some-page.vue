<script setup>
definePageMeta({
  // [id]-[slug].vueみたいなpathがあるとき、/test-categoryみたいなパスは該当しないよう、正規表現でチェックできる
  path: '/:postId(\\d+)-:postSlug'

  // layouts/ディレクトリの中で一致するファイルを指定
  layout: 'admin'

  // レイアウトを無効にすることもできる
  layout: false

  key: (route) => route.fullPath,

  keepalive: {
    exclude: ['modal']
  },

  pageType: 'Checkout'
})
</script>

<template>
  
</template>