<template>
  <div
    v-show="isVisible"
    class="alert alert-success position-absolute w-100"
    role="alert"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Все прошло успешно!",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
