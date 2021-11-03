<template>
  <input
    type="radio"
    :checked="value === modelValue"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
</template>

<script>
import UniqueID from "@/features/UniqueID.js";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    const uuid = UniqueID().getID();

    return {
      uuid,
    };
  },
};
</script>
