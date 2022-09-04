<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Number of Notes</th>
          <td>{{ numberOfAllNotes }}</td>
        </tr>
        <tr>
          <th>Number of Characters</th>
          <td>{{ numberOfAllCharacters }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "../store/notesStore";
const notesStore = useNotesStore();

const numberOfAllNotes = ref(notesStore.allNotes);
const numberOfAllCharacters = ref(notesStore.allCharacters);
</script>
