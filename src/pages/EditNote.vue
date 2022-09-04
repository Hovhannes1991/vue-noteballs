<template>
  <div class="edit-note">
    <h1>Edit note by id: {{ props.id }}</h1>
    <RouterLink :to="{ name: 'view-notes' }">
      <button class="button is-link has-background-success">Back</button>
    </RouterLink>
    <TheTextarea v-model="text">
      <template #button>
        <button
          @click="save"
          class="button is-link has-background-success"
          :disabled="!text"
        >
          Save
        </button>
      </template>
    </TheTextarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheTextarea from "../components/TheTextarea.vue";
import { useNotesStore } from "../store/notesStore";
import { useRouter } from "vue-router";
const props = defineProps(["id"]);
const notesStore = useNotesStore();
const router = useRouter();

const currentText = notesStore.getNoteCurrentValue(+props.id);
const text = ref(currentText);
const save = async () => {
  notesStore.updateNote(+props.id, text.value);
  router.push({name: 'view-notes'});
};
</script>
