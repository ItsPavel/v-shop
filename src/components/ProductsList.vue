<template>
  <div
    class="col-md-12 col-lg-4 mb-4"
    v-for="product in allProducts"
    :key="product.id"
  >
    <div class="card">
      <img
        src="@/assets/img/phone-img.png"
        alt=""
        class="card-img-top"
        style="height: 250px"
      />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title text-primary">{{ product.title }}</h5>

          <like-icon @click="addLike(product.id)" class="text-primary icon" />
        </div>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum
          similique repellat a laborum.
        </p>
        <p class="card-text">
          <span class="text-primary">Цена:</span> {{ product.price }} р
        </p>
        <div class="d-flex justify-content-between">
          <base-button
            v-if="inCart(product.id)"
            @click="remove(product.id)"
            class="btn-danger"
            >Удалить</base-button
          >
          <base-button v-else @click="add(product.id)">В корзину</base-button>
          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="btn btn-secondary"
          >
            Подробнее
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./UI/buttons/BaseButton.vue";
import LikeIcon from "./icons/LikeIcon.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BaseButton,
    LikeIcon,
  },
  methods: {
    ...mapActions("cartStore", ["add", "remove"]),
    ...mapActions("likeStore", ["addLike", "removeLike"]),
  },
  computed: {
    ...mapGetters("productsStore", { allProducts: "visibleProducts" }),
    ...mapGetters("cartStore", ["inCart"]),
  },
};
</script>

<style></style>
