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
    name: '外籍教師欺Emmy Bianca Johnson｜EmmyBCJ｜惡意解約欠錢不還' ,
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
      title: '外籍教師欺負台灣人｜Emmy Bianca Johnson｜EmmyBCJ｜惡意解約欠錢不還',
      meta: [
        { name: 'google-site-verification', content: 's2XDtGfHTkkfNUitZt_6iqqBQ_Dv79cUR1QUdah8RAg' },
        { name: 'description', content: '外籍教師 Emerald Bianca Carmelita Johnson（Emmy Johnson、EmmyBCJ）在台灣的誠信紀錄揭露，挑戰社會對「外師」的盲目信任。' },
        {
          name: "keywords",
          content:
            "EmmyBCJ, Emmy Johnson, Emerald Bianca Carmelita Johnson, 補教爭議, 外籍教師糾紛, 合約爭議, 借錢不還, 違約搬家, 外籍教師誠信問題, 台灣外師租屋糾紛, 借錢不還, 國際學校教師風險, 台中葳格, 教育制度弊病, 康橋",
        },

        { property: 'og:title', content: '外籍教師欺負台灣人｜Emmy Bianca Johnson｜EmmyBCJ｜惡意解約欠錢不還' },
        { property: 'og:description', content: '揭露外籍教師 Emerald Bianca Carmelita Johnson（Emmy Johnson、EmmyBCJ）與台灣仲介、房東間的合約糾紛與爭議事件與友人借款糾紛。' },
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
