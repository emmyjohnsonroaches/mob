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
  ],
});
</script>
