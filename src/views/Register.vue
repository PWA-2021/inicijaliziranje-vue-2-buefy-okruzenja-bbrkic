<template>
  <div class="register">
    <div class="top-layer"></div>
    <div class="data">
      <router-link to="/" target="self"><h2>CaptainCoin</h2></router-link>
      <h1>Welcome to the club!</h1>
      <p>
        If everyone is moving forward together, then success takes care of
        itself! This club is for members only. But once you join, membership
        lasts for an eternity.
      </p>
    </div>
    <div class="register-information">
      <h1>Registration</h1>
      <form @submit.prevent="submit">
        <span v-if="error" class="error">{{ error }}</span>
        <label for="firstname"
          >Firstname:
          <input
            type="firstname"
            id="firstname"
            placeholder="enter your firstname"
            v-model="firstname"
          />
          <span v-if="!$v.firstname.required && $v.firstname.$dirty"
            >Firstname is missing!</span
          >
          <span v-if="!$v.firstname.alpha && $v.firstname.$dirty"
            >Invalid input!</span
          >
        </label>
        <label for="lastname"
          >Lastname:
          <input
            type="lastname"
            id="lastname"
            placeholder="enter your lastname"
            v-model="lastname"
          />
          <span v-if="!$v.lastname.required && $v.lastname.$dirty"
            >Lastname is missing!</span
          >
          <span v-if="!$v.lastname.alpha && $v.lastname.$dirty"
            >Invalid input!</span
          >
        </label>
        <label for="email"
          >Email:
          <input
            type="email"
            id="email"
            placeholder="enter your email"
            v-model="email"
          />
          <span
            v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
            >Valid Email is missing!</span
          >
        </label>
        <label for="password"
          >Password:
          <input
            type="password"
            id="password"
            placeholder="enter your password"
            v-model="password"
          />
          <span v-if="!$v.password.required && $v.password.$dirty"
            >Password is missing!</span
          >
          <span
            v-if="
              (!$v.password.minLength || !$v.password.maxLength) &&
              $v.password.$dirty
            "
            >Password must be between
            {{ $v.password.$params.minLength.min }} and
            {{ $v.password.$params.maxLength.max }} characters!</span
          >
        </label>
        <label for="password2"
          >Confirm password:
          <input
            type="password"
            id="password2"
            placeholder="confirm your password"
            v-model="password2"
          />
          <span v-if="!$v.password2.required && $v.password2.$dirty"
            >Repeated password is missing!</span
          >
          <span v-if="!$v.password2.sameAs && $v.password2.$dirty"
            >Wrong password confirmation!</span
          >
        </label>
        <button type="submit" @click="submit">Create account</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  email,
  sameAs,
} from "vuelidate/lib/validators";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      error: null,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  validations: {
    firstname: {
      required,
      alpha,
    },
    lastname: {
      required,
      alpha,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    password2: {
      required,
      sameAs: sameAs("password"),
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(
          `Firstname: ${this.firstname}, Lastname: ${this.lastname}, Email: ${this.email}, Password: ${this.password}`
        );
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            data.user
              .updateProfile({
                displayName: this.firstname,
              })
              .then(() => {
                alert("Form successfully submitted.");
                this.$router.replace("/");
              });
          })
          .catch((err) => {
            this.error = err.message;
          });
      }
    },
  },
  name: "register",
  components: {
    // register,
  },
};
</script>

<style lang="scss" scoped>
// fonts
@import url("https://fonts.googleapis.com/css2?family=Dosis");

body {
  font-family: "Dosis", sans-serif !important;
}
html {
  height: 100%;
}
.register {
  min-height: 100vh;
  background-image: url("../images/image2.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #d4dfe0;
}
.top-layer {
  min-height: 100vh;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #16161613),
    color-stop(100%, #161616e8)
  );
  position: absolute;
  z-index: 0;
  width: 100%;
}
.register-information {
  width: 40%;
  backdrop-filter: blur(5px);
  background-color: #00000013;
  float: left;
}
.data,
.register-information {
  padding: 6% 5% 5% 5%;
  min-height: 100vh;
}
.data {
  width: 60%;
  float: right;
}
.register-information h1 {
  font-size: 2.813rem;
  text-shadow: 2px 5px 6px #000000be;
  color: #5aa897;
}
.data h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #d4dfe0;
  position: relative;
  text-align: right;
  text-shadow: 2px 5px 6px #000000be;
}
.data h1 {
  font-size: 40px;
  color: #5aa897;
  text-align: right;
  position: relative;
  top: 300px;
  font-weight: bold;
  text-shadow: 2px 5px 6px #000000be;
}
.data p {
  position: relative;
  font-size: 20px;
  top: 340px;
  color: #ecdbba;
  text-shadow: 2px 5px 6px #000000be;
  text-align: right;
}
.register-information input {
  width: 100%;
  padding: 10px 5px;
  outline: 0;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid #ecdbba;
  position: relative;
  color: #5aa897;
}
.register-information input:focus {
  color: #5aa897;
  transition: ease-in 0.3s;
  outline: none;
  background-color: #ecdbba23;
  border-radius: 20px;
}
.register-information input::placeholder {
  color: #d4dfe09d;
  padding-left: 5px;
}
.register form {
  margin-top: 30px;
}
label:nth-child(1),
label:nth-child(2) {
  display: block;
  width: 48%;
  float: left;
  padding-bottom: 20px;
}
label:nth-child(1) {
  margin-right: 4%;
}
form label {
  color: #ecdbba;
}
form label {
  display: block;
  margin-top: 20px;
}
form button {
  width: 200px;
  padding: 10px 0;
  border-radius: 20px;
  margin-top: 50px;
  background-color: #5aa897;
  color: #fff;
  text-shadow: 2px 2px 6px #000000e5;
  border: 0px;
}
form button:after {
  content: "»";
  position: relative;
  opacity: 0;
}
form button:hover {
  transition: ease-out 0.2s;
  cursor: pointer;
}
form button:hover:after {
  opacity: 1;
  margin-left: 8px;
  transition: ease-out 0.2s;
}
// add style to feedback messages
span {
  color: #c84b31;
}
span.error {
  display: none;
}
@media screen and (max-width: 992px) {
  .register-information {
    width: 80%;
    margin: 0 10%;
    position: relative;
    z-index: 2;
    min-height: auto;
    border-radius: 15px;
  }
  .top-layer,
  .register {
    min-height: 130vh;
  }
  .data {
    float: none;
    width: 80%;
    margin: 0 auto;
    min-height: auto;
  }
  .data h1 {
    text-align: center;
    position: relative;
    top: 0px;
  }
  .data p {
    font-size: 20px;
    top: 0px;
    text-align: center;
  }
  .data h2 {
    text-align: center;
    bottom: 30px;
  }
  .top-layer {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #1616169a),
      color-stop(100%, #16161685)
    );
  }
}
@media screen and (max-width: 768px) {
  label:nth-child(1),
  label:nth-child(2) {
    width: 100%;
    padding-bottom: 0;
  }
  label:nth-child(1) {
    margin-right: 0%;
  }
  label:nth-child(2) {
    padding-bottom: 20px;
  }
  .top-layer,
  .register {
    height: 150vh;
  }
  .register-information h1 {
    text-align: center;
  }
  form button {
    margin: 40px auto 0 auto;
    display: block;
  }
}
@media screen and (max-width: 576px) {
}
</style>
