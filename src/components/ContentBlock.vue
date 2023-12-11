<template>
  <div class="container">
    <div class="row bgcolor">
      <div class="col-md-6">
        <img
          class="border border-primary rounded-4 size-img"
          src="@/assets/img/Iphone-img.jpg"
        />
      </div>
      <div class="col-md-6 text-center">
        <div class="">
          <h1 class="pb-3">Думаете, отличный смартфон стоит слишком дорого?</h1>
          <p class="pb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            perspiciatis! A expedita temporibus cupiditate quae ullam laudantium
            soluta perferendis.
          </p>
        </div>
        <router-link :to="{ name: 'catalog' }">
          <button :type="button" class="btn btn-primary">View Catalog</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bgcolor {
  background: rgba(220, 221, 221, 0.596);
}
.size-img {
  height: 100%;
  width: 100%;
  max-width: 500px;
}
</style>
