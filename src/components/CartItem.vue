<template>
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
    <div class="">
      <h5 class="m-0">{{ product.title }}</h5>
    </div>
    <div class="d-flex">
      <button-badge @click="setCnt({ id: product.id, cnt: product.cnt - 1 })"
        ><minus-icon
      /></button-badge>
      <span class="p-2">{{ product.cnt }}</span>
      <button-badge @click="setCnt({ id: product.id, cnt: product.cnt + 1 })"
        ><plus-icon
      /></button-badge>
    </div>
    <h5 class="m-0">{{ product.price * product.cnt }} р</h5>
    <trash-icon class="btn btn-danger" @click="remove(product.id)" />
  </div>
  <div class="d-flex justify-content-end">
    <h4>Итого: {{ total }} р</h4>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ButtonBadge from "@/components/UI/buttons/ButtonBadge.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import MinusIcon from "@/components/icons/MinusIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
export default {
  components: {
    ButtonBadge,
    PlusIcon,
    MinusIcon,
    TrashIcon,
  },
  computed: {
    ...mapGetters("cartStore", {
      products: "itemsDetailed",
      total: "total",
    }),
  },
  methods: {
    ...mapActions("cartStore", ["setCnt", "remove"]),
  },
};
</script>
