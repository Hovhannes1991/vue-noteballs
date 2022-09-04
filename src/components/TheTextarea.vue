<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          @input="onInput($event)"
          :value="props.modelValue"
          class="textarea"
          placeholder="Add a new note"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { required: true },
});

const emits = defineEmits(["update:modelValue"]);

const onInput = (e) => emits("update:modelValue", e.target.value);
</script>
