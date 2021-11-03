<template>
  <div>
    <h1>Create an event</h1>
    <form @submit="sendForm">
      <BaseSelect
        :options="categories"
        v-model="values.category"
        label="Select a category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="values.title" label="Title" type="text" />

        <BaseInput
          v-model="values.description"
          label="Description"
          type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="values.location" label="Location" type="text" />
      </fieldset>
      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="values.pets"
            name="pets"
            :options="petOptions"
            vertical
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="values.catering" label="Catering" />
        </div>

        <div>
          <BaseCheckbox v-model="values.music" label="Live music" />
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { inject } from "vue";
import axios from "axios";

import { useForm } from "vee-validate";
import { object, string, number, boolean } from "yup";

import BaseInput from "@/components/inputs/BaseInput.vue";
import BaseSelect from "@/components/inputs/BaseSelect.vue";
import BaseCheckbox from "@/components/inputs/BaseCheckbox.vue";
import BaseRadioGroup from "@/components/inputs/BaseRadioGroup.vue";

export default {
  setup() {
    const { categories, petOptions } = inject("GStore");

    const validationSchema = object({
      title: string().required(),
      description: string().required(),
      location: string().required(),
      category: string().required(),
      pets: number(),
      catering: boolean(),
      music: boolean(),
    });

    const initialValues = {
      pets: 0,
      catering: false,
      music: false,
    };

    const { values, errors, handleSubmit } = useForm({
      validationSchema,
      initialValues,
    });

    const sendForm = handleSubmit(values => {
      axios
        .post(
          "https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events",
          values
        )
        .then(response => console.log("Response", response))
        .catch(error => console.log("Error", error));
    });

    return {
      categories,
      petOptions,
      sendForm,
      values,
      errors,
    };
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
};
</script>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
