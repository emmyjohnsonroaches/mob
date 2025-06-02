import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
    vueI18n: '~/i18n.config.ts'
  },

  app: {
    head: {
      title: 'Emmy Bianca Johnson 失信行為揭露',
      meta: [
        { name: 'description', content: '記錄 Emmy Bianca Johnson 在台灣的違約與借錢不還紀錄' },
        { name: 'keywords', content: 'Emmy Bianca Johnson, 外籍老師, 借錢不還, 國際學校, 違約, 情緒操控, 惡意刁難' }
      ]
    }
  }

  
});
