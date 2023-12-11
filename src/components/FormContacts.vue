<template>
  <form
    style="max-width: 500px"
    class="d-flex-column justify-content-center pt-3"
    @submit.prevent="handleSubmit"
  >
    <base-input
      v-for="(elem, i) in imputForm"
      :key="i"
      :typeInp="elem.typeInp"
      :mark="elem.mark"
      :title="elem.title"
      :value="elem.value"
      @updValue="(newValue) => (elem.value = newValue)"
    />
    <base-textarea
      v-for="(elem, i) in textareaForm"
      :key="i"
      :mark="elem.mark"
      :title="elem.title"
      :value="elem.value"
      @updValue="(newValue) => (elem.value = newValue)"
    />
    <base-button type="submit" :disabled="!formReady">Отправить</base-button>
  </form>
</template>

<script>
import BaseTextarea from "./UI/BaseTextarea.vue";
import BaseButton from "./UI/buttons/BaseButton.vue";
import BaseInput from "./UI/BaseInput.vue";
export default {
  components: {
    BaseButton,
    BaseInput,
    BaseTextarea,
  },
  data() {
    return {
      imputForm: [
        { title: "Имя", mark: "Name", typeInp: "text", value: "" },
        {
          title: "Адрес электронной почты",
          mark: "Email",
          typeInp: "email",
          value: "",
        },
        {
          title: "Телефон",
          mark: "Phone",
          typeInp: "tel",
          value: "",
        },
      ],
      textareaForm: [
        {
          title: "Сообщение",
          mark: "Textarea",
          value: "",
        },
      ],
    };
  },
  computed: {
    formData() {
      return [...this.imputForm, ...this.textareaForm];
    },
    dataForSub() {
      return this.formData.map((item) => ({
        title: item.title,
        value: item.value,
      }));
    },

    formReady() {
      return this.dataForSub.every((elem) => elem.value != "");
    },
  },
  methods: {
    deleteValue() {
      this.formData.forEach((el) => (el.value = ""));
    },
    handleSubmit() {
      console.log(this.dataForSub);
      this.deleteValue();
      alert("Спасибо за обратную связь");
    },
  },
};
</script>
<style></style>
