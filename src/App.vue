<template>
  <the-header></the-header>
  <the-main></the-main>
  <the-footer></the-footer>
</template>

<script>
import TheMain from "./components/layout/TheMain.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    TheMain,
  },
};
</script>

<style></style>
