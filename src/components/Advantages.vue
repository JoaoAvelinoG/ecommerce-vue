<script lang="ts" setup>
import { ShoppingOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="advantages">
    <div class="container">
      <div v-for="n in 5" class="container__item">
        <ShoppingOutlined />
        <p class="container__item__paragraph">Frete Grátis!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../style/scss/abstracts/variables';

.advantages {
  height: 92px;
  width: 100%;
}

.container {
  display: flex;
  gap: 20px;
  height: inherit !important;
}

.container__item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background-color: $secondary-button-color;
}
</style>
