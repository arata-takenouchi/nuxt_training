<script setup lang="ts">
// エラーページをカスタマイズできる
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const statusCode = props.error?.statusCode
const message = ref('')

if (statusCode === 404) {
  message.value = 'ページが見つかりません'
}

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div>
    <h2>{{ statusCode }}</h2>
    <p>{{ message }}</p>
    <button @click="handleError">Clear</button>
  </div>
</template>
