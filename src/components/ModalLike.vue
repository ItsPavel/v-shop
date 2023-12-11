<template>
  <modal-window title="Избранное" type="likes">
    <template v-slot:body>
      <div v-if="lengthLike > 0">
        <div
          class="d-flex justify-content-between align-items-center border border-secondary p-2 mb-2"
          v-for="product in products"
          :key="product.id"
        >
          <img
            src="@/assets/img/phone-img.png"
            class="img-fluid rounded-3"
            alt="Phone"
            style="
               {
                width: 70px;
                height: 70px;
              }
            "
          />
          <h4 class="m-0">{{ product.title }}</h4>
          <h5 class="m-0">{{ product.price }} р</h5>
          <trash-icon class="btn btn-danger" @click="removeLike(product.id)" />
        </div>
      </div>
      <p v-else>В избранном пока нет товаров</p>
    </template>
  </modal-window>
</template>

<script>
import ModalWindow from "./UI/ModalWindow.vue";
import TrashIcon from "./icons/TrashIcon.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ModalWindow,
    TrashIcon,
  },
  computed: {
    ...mapGetters("likeStore", {
      products: "itemsDetailed",
      lengthLike: "lengthLike",
    }),
  },
  methods: {
    ...mapActions("likeStore", ["removeLike"]),
  },
};
</script>

<style></style>
