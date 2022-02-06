<template>
  <div id="home">
    <a name="top"></a>
    <div class="main-bg-image"></div>
    <main>
      <header :class="{ change_color: scrollPosition > 60 }">
        <div class="wrapper">
          <div class="logo">
            <h1 onClick="window.location.reload();">CaptainCoin</h1>
          </div>
          <nav>
            <div class="links">
              <a href="#contacts">Contacts</a>
              <a href="#goals">Goals</a>
              <a href="#about">About</a>
            </div>
            <div class="menubar">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </nav>
        </div>
      </header>
      <div class="dark-bg"></div>
      <div class="wrapper">
        <div class="main-center">
          <vue-typed-js :strings="['Captain Coin']">
            <h1 class="typing"></h1>
          </vue-typed-js>
          <h2>Why would you have to be the one doing all the calculations?</h2>
          <!-- create base -->
          <div class="main-buttons">
            <router-link to="/register" target="self"
              ><button id="register">Create An Account</button></router-link
            >
            <div class="center">
              <button id="login">Sign In</button>
            </div>
            <div class="popup">
              <i class="fas fa-times-circle"></i>
              <div class="popup-bg-image">
                <h4>Welcome back!</h4>
                <p>Enter your credentials to access your account.</p>
                <div class="form-element">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </div>
                <div class="form-element">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    required
                  />
                </div>
                <div class="form-element">
                  <button type="submit" class="login" disabled>Login</button>
                </div>
              </div>

              <!--LOGIN -->
              <div class="text">
                <h4>Welcome back!</h4>
                <p>Enter your credentials to access your account.</p>
                <form
                  action="#"
                  @submit.prevent="submitLogin"
                  :class="{ error: v$.email.$errors.length }"
                >
                  <div class="form-element">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      v-model="email"
                    />

                    <div
                      class="input-errors"
                      v-for="error of v$.email.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="form-element">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      v-model="password"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.password.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="form-element">
                    <button type="submit" class="login" @click="submitLogin">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- connect with the base -->
          <!-- add counting animation -->
          <div class="main-users">
            <div class="registered">
              <h3>1234</h3>
              <p>Registered users</p>
            </div>

            <div class="active-users">
              <h3>1234</h3>
              <p>Currently active users</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- WHO SECTION -->
    <a name="about"></a>
    <div class="who">
      <div class="wrapper">
        <h1>Who we are</h1>
        <hr class="heading-underline" />
        <div class="quotation">
          <span>&#10078;</span>
          <blockquote>
            A budget is telling your money where to go instead of wondering
            where it went.
          </blockquote>
          <span>&#10080;</span>
        </div>
        <p>
          We are a small team whose main idea is to make budgeting life easier
          for you. We offer possibility of adding up income, categorizing
          expenses, and creating a rough outline for a budget, setting a
          specific financial goal. The stage of life you’re in usually
          determines what type of goals you wish to achieve.
        </p>
      </div>
    </div>
    <!-- GOALS SECTION -->
    <a name="goals"></a>
    <div class="goals">
      <div class="wrapper">
        <h1>Our goals</h1>
        <hr class="heading-underline" />
        <div class="timeline">
          <div class="goal-left">
            <div class="content">
              <h2>Make a budget and live by it</h2>
              <p>
                Budgets are focused on debts and expenses and nobody got rich by
                focusing on their debts. You get wealthy by focusing on your
                assets and your income. Most experts agree that budgets are
                useful, if only to clearly define the amount of income and fixed
                expenses in someone’s household. Creating a budget is a great
                way to know your financial limits.
              </p>
            </div>
          </div>
          <div class="goal-right">
            <div class="content">
              <h2>Saving an emergency fund</h2>
              <p>
                In a fragile job market, emergency funds are essential.
                Emergency funds are commonly used to fix a surprise car repair,
                pay for a hospital stay, the mortgage, and a variety of other
                unforeseen issues.
              </p>
            </div>
          </div>
          <div class="goal-left">
            <div class="content">
              <h2>Prioritize expenses and goals</h2>
              <p>
                Understand the difference between needs and wants, then focus on
                the essentials first. That doesn’t mean other expenses aren’t
                important, though. Your financial goals, such as paying off debt
                or saving for retirement, should still receive attention. The
                purpose of a budget, is to understand whether or not your money
                is going toward things that you’re happy with, you’re proud of
                and align with your values.
              </p>
            </div>
          </div>
        </div>
        <div class="goal-right">
          <div class="content">
            <h2>Leave room for surprises</h2>
            <p>
              Don’t expect your budget to be perfect. Surprises will happen, and
              some expenses may slip through the cracks — like the occasional
              impulse buy. But you can take precautions to soften the blow.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTACTS SECTION -->
    <a name="contacts"></a>
    <div class="contacts">
      <div class="wrapper">
        <h1>Contact us</h1>
        <hr class="heading-underline" />
        <article>
          <h2>Get in touch with us!</h2>
          <p>
            A creator-friendly customer support team that’s just a click away.
            We’re here to help and answer any question you might have. We look
            forward to hearing from you. Feel free to contact us.
          </p>

          <!-- SOCIAL MEDIA ICONS -->
          <a href="https://hr-hr.facebook.com/TVZ.Zagreb/"
            ><i class="fab fa-facebook"></i
          ></a>
          <a
            href="https://hr.linkedin.com/school/tehni%C4%8Dko-veleu%C4%8Dili%C5%A1te-u-zagrebu/"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/tvz_zagreb"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            href="https://www.instagram.com/tehnicko_veleuciliste_zagreb/?hl=hr"
            ><i class="fab fa-instagram"></i
          ></a>
        </article>

        <article>
          <form @submit.prevent="sendEmail">
            <div class="name-information">
              <div class="element">
                <label
                  >Firstname
                  <input
                    type="text"
                    v-model="firstname"
                    name="firstname"
                    required
                  />
                </label>
              </div>
              <div class="element">
                <label
                  >Lastname
                  <input
                    type="text"
                    v-model="lastname"
                    name="lastname"
                    required
                  />
                </label>
              </div>
            </div>
            <label
              >Email
              <input type="email" v-model="toEmail" name="toEmail" required />
            </label>
            <label for="message"
              >Message
              <textarea name="message" v-model="message" cols="30" rows="10">
              </textarea>
            </label>
            <input type="submit" value="submit" @click="sendEmail" />
          </form>
        </article>
      </div>
    </div>

    <!-- MAP SECTION-->
    <div class="map">
      <div class="wrapper">
        <article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7974754342285!2d15.967324915568545!3d4579528497910614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x4765d68b441ce2df%3A0x54e2a03adf42446f!2sTehni%C4%8Dko%20veleu%C4%8Dili%C5%A1te%20u%20Zagrebu!5e0!3m2!1shr!2shr!4v1637181352494!5m2!1shr!2shr"
            height="400"
            width="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </article>
        <article>
          <h2>Other contact information</h2>
          <p class="location">Vrbik 8,</p>
          <p class="location2">10000 Zagreb</p>
          <p class="phone-number">+012 345 6789</p>
          <p class="email">bbrkic@tvz.hr</p>
        </article>
      </div>
    </div>
    <a href="#top" class="toTopBefore" :class="{ toTop: scrollPosition > 60 }">
      <i class="fas fa-arrow-circle-up"></i>
    </a>
  </div>
</template>

<script>
//import data from "../views/Home.vue";
import emailjs from "emailjs-com";
import userService from "../services/usersService";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "home",
  components: {},

  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    };
  },
  data() {
    return {
      users: [],
      scrollPosition: null,

      // login form
      email: "",
      password: "",
      error: null,

      // contact us form
      firstname: "",
      lastname: "",
      toEmail: "",
      message: "",
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    // CONTACT US FORM
    async sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_lqivm2d",
          "template_cmkzz3q",
          e.target,
          "user_HAvXbKaVfznM5LVHE1Tzs",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            toEmail: this.toEmail,
            message: this.message,
          }
        );
        // FIX CLEARING DATA AFTER SUBMIT CLICK BUG
        this.firstname = "";
        this.lastname = "";
        this.toEmail = "";
        this.message = "";
      } catch (error) {
        console.log({ error });
      }
    },
    // gotoContact() {
    //   let route = this.$router.resolve({ path: "/Home.vue" });
    //   window.open(route.href);
    // },
    async submitLogin() {
      // this.$v.$touch();
      const isValid = await this.v$.$validate();
      if (!isValid) return;

      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/captaincoin");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.users = userService.getAll;
  },
};
</script>

<style lang="scss">
@import "../style.css";
</style>
