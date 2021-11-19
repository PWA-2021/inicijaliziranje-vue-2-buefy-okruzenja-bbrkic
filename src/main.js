//buefy
import Vue from "vue";
import App from "./App.vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueTypedJs from "vue-typed-js";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueTypedJs);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.config.productionTip = false

let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let menubar = document.querySelector('.menubar');
let links = document.querySelector('.links');

menubar.addEventListener("click" , function() {
  bar1.classList.toggle('barclose1');
  bar2.classList.toggle('barclose2');
  bar3.classList.toggle('barclose3');
  links.classList.toggle('newlinks');
});


