<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <Test /> -->
  </div>
</template>

<script setup lang="ts">
// 動的にhead設定を変更することもできる
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

useSeoMeta({
  title: 'My App',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogTitle: 'My Amazing Site',
  ogImage: 'summary_large_image',
  twitterCard: 'summary_large_image',
})
</script>
