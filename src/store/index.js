import { reactive } from "vue";

export default reactive({
  flashMessage: "",
  event: null,
  categories: [
    "sustainability",
    "nature",
    "animal welfare",
    "housing",
    "education",
    "food",
    "community",
  ],
  petOptions: [
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
  ],
});
