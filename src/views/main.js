import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueTypedJs from "vue-typed-js";
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueTypedJs);
Vue.use(VCalendar, {
  componentPrefix: 'vc',  
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.config.productionTip = false;

// ANIMATED MENU
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menubar = document.querySelector(".menubar");
let links = document.querySelector(".links");
let vertical_navbar = document.querySelector(".vertical-navbar");

menubar.addEventListener("click", function () {
  bar1.classList.toggle("barclose1");
  bar2.classList.toggle("barclose2");
  bar3.classList.toggle("barclose3");
  links.classList.toggle("newlinks");
  vertical_navbar.classList.toggle("newlinks");
});

// SCROLL TO TOP
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// POPUP LOGIN
document.querySelector("#login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".dark-bg").classList.add("active");
});
document
  .querySelector(".popup .fa-times-circle")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".dark-bg").classList.remove("active");
  });

  