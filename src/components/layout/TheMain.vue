<template>
  <main class="main">
    <teleport to="body">
      <the-like v-if="$store.state.modalStore.isLikesModalOpen" />
      <the-cart v-else-if="$store.state.modalStore.isCartModalOpen" />
    </teleport>
    <router-view />
  </main>
</template>

<script>
import TheCart from "../ModalCart.vue";
import TheLike from "../ModalLike.vue";
export default {
  components: { TheCart, TheLike },
};
</script>

<style>
.main {
  min-height: 100vh;
}
</style>
