import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Data from "../views/Data.vue";

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
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;
