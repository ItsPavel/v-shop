<template>
  <div class="container">
    <div class="d-flex flex-column position-relative">
      <success-modal title="Товар добавлен в корзину" :isVisible="isVisible" />
      <img
        src="@/assets/img/phone-img.png"
        class="mx-auto"
        alt="Phone"
        style="height: 400px"
      />
      <div>
        <h2>{{ product.title }}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id
          voluptatibus expedita non enim voluptates a impedit voluptas iusto
          maiores officiis fuga quis quaerat, eveniet iure dolores ad libero
          perferendis?
        </p>
        <hr />
        <h4 class="">
          <span class="text-primary">Цена:</span> {{ product.price }} р
        </h4>
        <div class="d-flex justify-content-end">
          <base-button @click="addInCart(product.id)">В корзину</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SuccessModal from "./UI/SuccessModal.vue";
import BaseButton from "./UI/buttons/BaseButton.vue";
export default {
  components: {
    BaseButton,
    SuccessModal,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    ...mapActions("cartStore", ["add"]),
    addInCart(id) {
      this.add(id);
      this.isVisible = true;
    },
  },
  computed: {
    ...mapGetters("productsStore", ["oneProduct"]),
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.oneProduct(this.id);
    },
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        setTimeout(() => (this.isVisible = false), 2000);
      }
    },
  },
};
</script>

<style></style>
