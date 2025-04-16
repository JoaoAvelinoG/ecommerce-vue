import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: { hello: 'Hello!' },
    pt: { hello: 'Olá!' },
  },
})

export default i18n
