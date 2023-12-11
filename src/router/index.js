import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import ContactsPage from "@/views/ContactsPage.vue";
import CatalogPage from "@/views/CatalogPage.vue";
import ProductInfo from "@/views/ProductInfo.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
  },
  {
    name: "product",
    path: "/catalog/:id",
    component: ProductInfo,
  },
  {
    path: "/:any(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
