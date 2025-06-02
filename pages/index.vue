<template>
  <div class="min-h-screen bg-white text-black p-10">
    <h1 class="text-3xl font-bold">
      {{ $t("title") }}
    </h1>
    <p class="mt-4 text-lg">
      {{ $t("summary") }}
    </p>
  </div>
</template>

<script setup>
useHead({
  title: "Emmy Bianca Johnson 黑歷史揭露",
  meta: [
    {
      name: "description",
      content:
        "記錄 Emmy Bianca Johnson 在台灣的失信行為，包含借錢不還、違約搬離等事實證據，請廣為周知。",
    },
    {
      name: "keywords",
      content: "Emmy Bianca Johnson, 台灣外籍老師, 違約, 契約糾紛, 借錢不還",
    },
    { property: "og:title", content: "揭露外籍教師爭議｜台灣人善良不該被濫用" },
    {
      property: "og:description",
      content: "從租屋違約、借錢不還，到翻臉封鎖協助者，完整紀錄真實案例。",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mob-theta.vercel.app/" },
    {
      property: "og:image",
      content: "https://mob-theta.vercel.app/og-image.png",
    },

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content: "https://mob-theta.vercel.app/og-image.png",
    },
  ],
  title: "台灣善意被踐踏：Emmy Bianca Johnson 外籍教師爭議",
});
</script>
