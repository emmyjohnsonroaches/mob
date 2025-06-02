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
   modules: ['@nuxtjs/i18n',  '@nuxtjs/sitemap'],

  site: { 
    url: 'https://mob-theta.vercel.app/', 
    name: 'Emmy Bianca Johnson 外籍教師爭議事件' ,
    autoLastmod: true, // 自動加入 <lastmod>
    defaults: {
      changefreq: 'weekly',
      priority: 0.8
    },
    routes: [
      '/',
     
    ]
    },
 
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
    vueI18n: '~/i18n.config.ts'
  },
  app: {
    head: {
      title: '台灣善意被踐踏：Emmy Bianca Johnson 外籍教師爭議事件',
      meta: [
        { name: 'google-site-verification', content: 's2XDtGfHTkkfNUitZt_6iqqBQ_Dv79cUR1QUdah8RAg' },
        { name: 'description', content: '一位南非外籍教師在台灣的誠信紀錄揭露，挑戰社會對「外師」的盲目信任。' },
        { property: 'og:title', content: '揭露外籍教師誠信爭議｜Emmy Bianca Johnson' },
        { property: 'og:description', content: '台灣的國際教育制度是否該重新檢討？一位南非女教師的真實事件紀錄。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://mob-theta.vercel.app/' },
        { property: 'og:image', content: 'https://mob-theta.vercel.app/og-image.png' }, 
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: 'https://mob-theta.vercel.app/' }
      ]
    }
  }

  
});
