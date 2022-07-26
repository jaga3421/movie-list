import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WishListView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SettingsView.vue"),
  },
  {
    path: "/movie/:id",
    name: "movieDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieDetailsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
