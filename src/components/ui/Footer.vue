<script lang="ts" setup>
import { InstagramOutlined } from '@ant-design/icons-vue'
import { FacebookOutlined } from '@ant-design/icons-vue'
import { YoutubeOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="footer container border">
    <div class="footer__socialmedia">
      <InstagramOutlined style="font-size: 24px" />

      <FacebookOutlined style="font-size: 24px" />
      <YoutubeOutlined style="font-size: 24px" />
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 60vh;
}

.footer__socialmedia {
  display: flex;
  gap: 30px;
}
</style>
