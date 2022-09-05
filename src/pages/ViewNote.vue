<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ formatedDate }}</small>
          <small class="column has-text-right">{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button @click="editNote" href="#" class="button card-footer-item">
        Edit
      </button>
      <button @click="openDeleteModal" href="#" class="button card-footer-item">
        Delete
      </button>
    </footer>
  </div>

  <NoteDeleteModal
    v-if="modalStates.showNotedeeleteModal"
    v-model="modalStates.showNotedeeleteModal"
    @confirmDelete="deleteNote"
  />
</template>

<script setup>
import { useDateFormat } from "@vueuse/core";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import NoteDeleteModal from "@/modals/NoteDeleteModal.vue";

const router = useRouter();

const props = defineProps({
  note: {
    required: true,
    type: Object,
  },
});

const charactersLength = computed(() => {
  const length = props.note.content.length;
  const text = length > 1 ? "characters" : "caracter";
  return length + " " + text;
});

const date = new Date(props.note.date);
const formatedDate = useDateFormat(date, 'DD-MM-YYYY');

const emits = defineEmits(["on-delete-note"]);

const deleteNote = () => emits("on-delete-note");
const editNote = () =>
  router.push({ name: "edit-note", params: { id: props.note.id } });

const openDeleteModal = () => (modalStates.showNotedeeleteModal = true);

const modalStates = reactive({
  showNotedeeleteModal: false,
});
</script>

<style lang="scss" scoped></style>
