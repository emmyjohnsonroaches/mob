<template>
  <div class="main min-h-screen bg-gray-50 text-gray-900 p-6">
    <div
      class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-3xl mx-auto"
    >
      <h1 class="text-4xl font-bold mb-6 border-b pb-4">
        {{ $t("title") }}
      </h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">📌 {{ $t("summaryTitle") }}</h2>
        <p>{{ $t("summary1") }}</p>
        <p class="mt-2">{{ $t("summary2") }}</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">
          🚨 {{ $t("offensesTitle") }}
        </h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>{{ $t("offense1") }}</li>
          <li>{{ $t("offense2") }}</li>
          <li>{{ $t("offense3") }}</li>
          <li>{{ $t("offense4") }}</li>
          <li>{{ $t("offense5") }}</li>
          <li>{{ $t("offense6") }}</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">
          🔍 {{ $t("whyExposeTitle") }}
        </h2>
        <p>{{ $t("whyExpose1") }}</p>
        <p class="mt-2">{{ $t("whyExpose2") }}</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">
          🧭 {{ $t("callToSchoolsTitle") }}
        </h2>
        <p>{{ $t("callToSchools1") }}</p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">
          🧭 {{ $t("callToSchoolsTitle2") }}
        </h2>
        <p>{{ $t("callToSchools2") }}</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-2">
          📖 {{ $t("keywordsTitle") }}
        </h2>
        <p class="text-sm text-gray-600">{{ $t("keywordsText") }}</p>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main {
  background-color: #fcfcfc;
  opacity: 0.8;
  background-image: linear-gradient(#dee7eb 1px, transparent 1px),
    linear-gradient(to right, #dee7eb 1px, #fcfcfc 1px);
  background-size: 20px 20px;
}
</style>
