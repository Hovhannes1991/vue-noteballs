<template>
  <TheNavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import TheNavBar from "./layouts/TheNavBar.vue";
import { useNotesStore } from "./store/notesStore";

const storeNotes = useNotesStore();
storeNotes.getNotes();
</script>

<style scoped></style>
