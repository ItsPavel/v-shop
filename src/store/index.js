import { createStore } from "vuex";
import modalStore from "./modules/modalStore";
import productsStore from "./modules/productsStore";
import cartStore from "./modules/cartStore";
import likeStore from "./modules/likeStore";

export default createStore({
  modules: {
    modalStore,
    productsStore,
    cartStore,
    likeStore,
  },
  strict: process.env.NODE_ENV !== "production",
});
