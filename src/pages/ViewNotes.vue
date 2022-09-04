<template>
  <div class="notes">
    <TheTextarea v-model="newNote">
      <template #button>
        <button
          @click="addNewNote"
          class="button is-link has-background-success"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </TheTextarea>

    <ViewNote
      v-for="note in storeNotes.notes"
      :note="note"
      @onDeleteNote="deleteNote(note.id)"
      :key="note.id"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "../store/notesStore";
import uuid from "uuid4";

import ViewNote from "@/pages/ViewNote.vue";
import TheTextarea from "../components/TheTextarea.vue";

let storeNotes = useNotesStore();

let newNote = ref("");

const addNewNote = () => {
  const note = {
    id: uuid(),
    content: newNote.value,
  };
  storeNotes.addNote(note);
  newNote.value = "";
};

const deleteNote = (id) => {
  storeNotes.deleteNote(id);
};

// watch(newNote, (text) => {
//   if (text.length > 20) {
//     console.log("enought");
//   }
// });
</script>
