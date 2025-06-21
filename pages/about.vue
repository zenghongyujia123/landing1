<template>
  <NuxtLayout>
    <div class="container">
    <h1>About Us</h1>
    <p>This is a sample landing page built with Nuxt 3.</p>
    <p>Nuxt 3 is a modern web framework built on top of Vue 3, offering features like:</p>
    <ul>
      <li>Server-Side Rendering</li>
      <li>Static Site Generation</li>
      <li>File-based routing</li>
      <li>Auto-imports</li>
      <li>API routes</li>
      <li>TypeScript support</li>
    </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
h1 {
  color: var(--primary-color);
  margin-top: 2rem;
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>