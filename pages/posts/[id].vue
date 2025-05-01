<script setup lang="ts">
// ページ遷移時にvalidationを行うことができる、falseの場合は404ページににリダイレクト
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})
</script>

<template>
  
</template>