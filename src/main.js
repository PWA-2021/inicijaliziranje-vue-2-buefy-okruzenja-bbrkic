import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueTypedJs from "vue-typed-js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.use(Buefy);
Vue.use(VueTypedJs);

const firebaseConfig = {
  apiKey: "AIzaSyDEp2GnsZW26AMrQ5uvBDbqdccGlWZIzTU",
  authDomain: "captaincoin-169ac.firebaseapp.com",
  databaseURL:
    "https://captaincoin-169ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "captaincoin-169ac",
  storageBucket: "captaincoin-169ac.appspot.com",
  messagingSenderId: "351537290089",
  appId: "1:351537290089:web:1d04c93df5c48243e57bf8",
  measurementId: "G-ZGP6PZQ5K4",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export { firestore };

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

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

// SCROLL TO TOP
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

Vue.config.productionTip = false;
