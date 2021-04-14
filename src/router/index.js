import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/import-wallets",
    name: "import",
    component: () => import("@/views/Import.vue")
  },
  {
    path: "/thank-you",
    name: "thanks",
    component: () => import("@/views/thank-you.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
