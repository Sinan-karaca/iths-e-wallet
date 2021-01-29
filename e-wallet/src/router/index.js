import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import App from "../App.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/CardParent",
    name: "CardParent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CardParent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
