<template>
  <products-catalog v-if="$store.state.productsStore.hasLoaded" />
  <error-page v-else />
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import ProductsCatalog from "@/components/ProductsCatalog.vue";
export default {
  components: {
    ProductsCatalog,
    ErrorPage,
  },
};
</script>
