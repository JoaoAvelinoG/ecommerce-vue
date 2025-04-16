import { createApp } from 'vue'
import App from '@/App.vue'

import pinia from '@/plugins/pinia'
import i18n from '@/plugins/i18n'
import { createHead } from '@unhead/vue/client'
import router from '@/router'

const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(head)
app.mount('#app')
