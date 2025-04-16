<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()

const toggleTheme = () => {
  isDark.value = !isDark.value // Alterna entre os modos
}
</script>

<template>
  <div class="container flex">
    <img class="logo" src="../../../public/favicon.svg" alt="Logo" />
    <nav class="links">
      <router-link to="/">Saiba Mais</router-link>
      <router-link to="/">Sobre Nós</router-link>
      <router-link to="/">Contato</router-link>
    </nav>
    <div>
      <button @click="toggleTheme">Tema</button>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 88px;
  height: 40px;
}

.links {
  display: flex;
  gap: 40px;
  text-transform: uppercase;
}
</style>
