<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button @click="editNote" href="#" class="button card-footer-item">
        Edit
      </button>
      <button @click="deleteNote" href="#" class="button card-footer-item">
        Delete
      </button>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
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

const emits = defineEmits(["on-delete-note"]);

const deleteNote = () => emits("on-delete-note");
const editNote = () =>
  router.push({ name: "edit-note", params: { id: props.note.id } });
</script>

<style lang="scss" scoped></style>
