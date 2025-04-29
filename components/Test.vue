<template>
  <div>
    <h1>Test</h1>
    {{ double }}
  </div>
</template>

<script setup lang="ts">
// こう書くとnuxt.config.tsで設定した環境変数を使用できる
const runtimeConfig = useRuntimeConfig()
const apiBaseURL = runtimeConfig.public.apiBaseURL

// app.configならこう
const appConfig = useAppConfig()
const primaryColor = appConfig.theme.primaryColor

const composable =useMyComposable()
const count = ref(1)
const double = computed(() => count.value * 2)
watch(count, (newVal) => {
  console.log(newVal)
})
</script>
