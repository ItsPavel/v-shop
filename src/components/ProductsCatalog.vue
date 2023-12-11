<template>
  <div class="container">
    <h2 class="text-primary mb-4">КАТАЛОГ ТОВАРОВ</h2>
    <section class="row">
      <products-list></products-list>
    </section>
    <div class="d-flex justify-content-center">
      <base-button class="show_more" @click="loadMore"
        >Показать ещё
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "./UI/buttons/BaseButton.vue";
import ProductsList from "./ProductsList.vue";
export default {
  components: {
    ProductsList,
    BaseButton,
  },
  methods: {
    ...mapActions("productsStore", ["loadMore"]),
  },
};
</script>

<style>
.show_more {
  align-content: center;
  align-items: center;
}
</style>
