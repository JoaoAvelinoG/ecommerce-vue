<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()

const toggleTheme = () => {
  isDark.value = !isDark.value // Alterna entre os modos
}
</script>

<template>
  <div class="container">
    <img src="../../../public/favicon.svg" alt="Logo" />
    <h1>Header</h1>
    <button @click="toggleTheme">Tema</button>
  </div>
</template>

<style scoped></style>
