<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from "@/components/inputs/BaseRadio.vue";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseRadio,
  },
};
</script>
