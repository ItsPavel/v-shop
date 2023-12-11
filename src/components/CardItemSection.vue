<template>
  <div
    class="col-md-5 card m-4 border border-primary justify-content-center align-items-center"
    style="width: 290px; height: 260px"
  >
    <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-2">
        <slot></slot>
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex-column align-items-beetwen">
          <h5 class="card-title text-primary">{{ card.title }}</h5>
          <p class="card-text">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
