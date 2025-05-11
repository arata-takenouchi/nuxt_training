<script setup lang="ts">
import { useLocale, useLocales, useLocaleDate } from '@/composables/locale';

const locale = useLocale()
const locales = useLocales()
const date = useLocaleDate(new Date('2025-01-01'))
</script>

<template>
  <div>
    <h1>This Year First Date</h1>
    <p>{{ date }}</p>
    <label for="locale-chooser">Preview different locale</label>
    <select id="locale-chooser" v-model="locale">
      <option v-for="locale of locales" :key="locale" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
