import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Data from "../views/Data.vue";
import CaptainCoin from "../views/CaptainCoin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
  {
    path: "/captaincoin",
    name: "CaptainCoin",
    component: CaptainCoin,
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

export default router;
