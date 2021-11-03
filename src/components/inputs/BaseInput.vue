<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
  />
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
  },
  setup() {
    const uuid = UniqueID().getID();

    return {
      uuid,
    };
  },
};
</script>
