<template>
  <div class="container">
    <div v-if="lengthCart > 0">
      <teleport to="body">
        <success-modal
          title="Товар добавлен в корзину"
          :isVisible="isVisibleSucces"
        />
      </teleport>
      <h2>Ваш Заказ</h2>
      <cart-item></cart-item>
      <h2>Ваши данные заказа</h2>
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

        <base-button type="submit" :disabled="!formReady"
          >Отправить</base-button
        >
      </form>
    </div>

    <div v-else>
      <h3 class="d-flex">Корзина пустая</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SuccessModal from "./UI/SuccessModal.vue";
import BaseInput from "./UI/BaseInput.vue";
import BaseButton from "./UI/buttons/BaseButton.vue";
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
    BaseInput,
    BaseButton,
    SuccessModal,
  },
  data() {
    return {
      imputForm: [
        { title: "Имя", mark: "firstName", type: "text", value: "" },
        {
          title: "Фамилия",
          mark: "lastName",
          typeInp: "text",
          value: "",
        },
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
        {
          title: "Адрес доставки",
          mark: "Adress",
          typeInp: "text",
          value: "",
        },
      ],
      isVisibleSucces: false,
    };
  },
  methods: {
    deleteValue() {
      this.imputForm.forEach((el) => (el.value = ""));
    },
    handleSubmit() {
      let form = { usedData: this.dataForSub, orderData: this.itemsDetailed };
      console.log(form);
      this.deleteValue();
      this.$router.replace("/catalog");
      this.$store.dispatch("cartStore/removeAll");
      localStorage.removeItem("cart");
    },
  },
  computed: {
    formReady() {
      return this.imputForm.every((elem) => elem.value != "");
    },
    dataForSub() {
      return this.imputForm.map((item) => ({
        title: item.title,
        value: item.value,
      }));
    },
    ...mapGetters("cartStore", ["lengthCart", "itemsDetailed"]),
  },
};
</script>
