<template>
  <modal-window title="Корзина" type="cart">
    <template v-slot:body>
      <cart-item v-if="lengthCart > 0" />
      <p v-else>Корзина пока пустая</p>
    </template>
    <template v-slot:btn>
      <router-link :to="isDisabled"
        ><base-button
          @click="close('cart')"
          :disabled="!lengthCart > 0"
          class="btn btn-primary"
          >Оформить заказ
        </base-button>
      </router-link>
    </template>
  </modal-window>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseButton from "./UI/buttons/BaseButton.vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import CartItem from "@/components/CartItem.vue";
export default {
  components: {
    ModalWindow,
    CartItem,
    BaseButton,
  },
  computed: {
    ...mapGetters("cartStore", ["lengthCart"]),
    isDisabled() {
      if (this.lengthCart > 0) {
        return { name: "checkout" };
      } else return {};
    },
  },
  methods: {
    ...mapActions("modalStore", ["close"]),
  },
};
</script>
