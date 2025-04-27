<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { data, refresh, status } = await useFetch('/api/hello')

const count = ref(1)
const double = computed(() => count.value * 2)
</script>
