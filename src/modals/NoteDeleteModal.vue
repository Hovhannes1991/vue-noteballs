<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div ref="modalContent" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button @click="cancel" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you shure you want to delete this note?
      </section>
      <footer class="modal-card-foot">
        <button @click="cancel" class="button">Cancel</button>
        <button @click="$emit('confirmDelete')" class="button is-danger">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
// const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue", "confirmDelete"]);
const cancel = () => emits("update:modelValue", false);

const modalContent = ref(null);
onClickOutside(modalContent, () => cancel());
</script>
