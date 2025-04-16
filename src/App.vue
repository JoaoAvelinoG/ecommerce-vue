<script lang="ts" setup>
import { useDark } from '@vueuse/core'

// Usamos useDark para gerenciar o tema
const isDark = useDark()

// Alterar o tema (o VueUse automaticamente altera o atributo data-theme no body)
const toggleTheme = () => {
  isDark.value = !isDark.value // Alterna entre os modos
}
</script>

<template>
  <div>
    <h1>Bem vindo!👽</h1>
  </div>
</template>

<style scoped></style>
