<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-between py-2 mb-4 border-bottom"
    >
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/logo.png" width="50" height="50" alt="logo" />
      </router-link>
      <nav>
        <ul class="nav justify-content-center">
          <li v-for="(link, i) in links" :key="i">
            <router-link
              :to="{ name: link.route }"
              class="nav-link link-dark"
              >{{ link.title }}</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="d-flex">
        <div class="pos">
          <button-badge class="me-2" @click="open('likes')">
            <like-icon />
          </button-badge>
          <span v-show="lengthLike > 0" class="circle">{{ lengthLike }}</span>
        </div>
        <div class="pos">
          <button-badge @click="open('cart')">
            <cart-icon />
          </button-badge>
          <span v-show="lengthCart > 0" class="circle">{{ lengthCart }}</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LikeIcon from "@/components/icons/LikeIcon.vue";
import CartIcon from "@/components/icons/CartIcon.vue";
import ButtonBadge from "@/components/UI/buttons/ButtonBadge.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    LikeIcon,
    CartIcon,
    ButtonBadge,
  },
  data() {
    return {
      links: [
        { title: "Home", route: "home" },
        { title: "Catalog", route: "catalog" },
        { title: "Contacts", route: "contacts" },
      ],
    };
  },
  methods: {
    ...mapActions("modalStore", ["open"]),
  },
  computed: {
    ...mapGetters("cartStore", ["lengthCart"]),
    ...mapGetters("likeStore", ["lengthLike"]),
  },
};
</script>

<style>
.pos {
  position: relative;
}
.circle {
  text-align: center;
  color: white;
  font-size: 11px;
  height: 15px;
  width: 15px;
  position: absolute;
  border-radius: 50%;
  background: red;
  bottom: 70%;
  left: 70%;
}

nav li:hover {
  color: rgb(122, 118, 118);
  cursor: pointer;
}
nav li .router-link-exact-active {
  border-bottom: 1px solid;
}
</style>
