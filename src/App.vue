<template>
  <TheNavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import TheNavBar from "./layouts/TheNavBar.vue";
</script>

<style scoped></style>
