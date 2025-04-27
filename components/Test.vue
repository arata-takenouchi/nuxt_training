<template>
  <div>
    <h1>Test</h1>
    {{ double }}
  </div>
</template>

<script setup lang="ts">
const composable =useMyComposable()
const count = ref(1)
const double = computed(() => count.value * 2)
watch(count, (newVal) => {
  console.log(newVal)
})
</script>
