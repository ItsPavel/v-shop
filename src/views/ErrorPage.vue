<template>
  <div class="d-flex align-items-start justify-content-center">
    <div class="text-center mt-4">
      <div>
        <img
          src="@/assets/img/img-404.png"
          alt=""
          class="img-fluid"
          style="max-width: 50%"
        />
      </div>
      <div class="mt-5">
        <p class="fs-3">
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <router-link :to="{ name: 'home' }" class="btn btn-primary"
          >Go Home</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
