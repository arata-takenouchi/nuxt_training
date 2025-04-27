<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    {{ double }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "#imports"

// const composable =useMyComposable()
const count = ref(1)
const double = computed(() => count.value * 2)
watch(count, (newVal) => {
  console.log(newVal)
})
</script>
