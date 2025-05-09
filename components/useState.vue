<template>
  <div>
    counter: {{ counter }}
    <button @click="counter++">+</button>
  </div>
</template>

<script setup lang="ts">
// useStateで状態を保持することも一応できる（実際はstore使うことが多いとは思う）
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
