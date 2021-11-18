<template>
  <div id="app">
    <!-- add image slide show -->
    <div class="main-bg-image"></div>
    <main>
      <header :class="{ change_color: scrollPosition > 60 }">
        <div class="wrapper">
          <div class="logo">
            <h1 onClick="window.location.reload();">CaptainCoin</h1>
          </div>
          <nav>
            <div class="links">
              <a href="#">Goals</a>
              <a href="#">About</a>
              <a href="#">Contacts</a>
            </div>
            <div class="menubar">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </nav>
        </div>
      </header>
      <div class="wrapper">
        <div class="main-center">
          <vue-typed-js :strings="['Captain Coin']">
            <h1 class="typing"></h1>
          </vue-typed-js>
          <h2>Why would you have to be the one doing all the calculations?</h2>

          <!-- create base -->
          <div class="main-buttons">
            <button>Create An Account</button>
            <button>Sign In</button>
          </div>

          <!-- connect with the base -->
          <!-- add counting animation -->
          <div class="main-users">
            <div class="registered">
              <h3>1234</h3>
              <p>Registered users</p>
            </div>

            <div class="active">
              <h3>1234</h3>
              <p>Currently active users</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- ---------------------- -->
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
          We are small team whose main idea is to make budgeting life easier for
          you. We offer possibility of adding up income, categorizing expenses,
          and creating a rough outline for a budget, setting a specific
          financial goal. The stage of life you’re in usually determines what
          type of goals you wish to achieve.
        </p>
      </div>
    </div>
    <!-- ---------------------- -->
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
    <!-- -------------------- -->
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

          <!-- add hover -->
          <!--  add links -->

          <!-- social media icons -->
          <i class="fab fa-facebook"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </article>

        <article>
          <form action="">
            <div class="name-information">
              <b-field label="FIRST NAME">
                <b-input v-model="name"></b-input>
              </b-field>
              <b-field label="LAST NAME">
                <b-input v-model="name"></b-input> </b-field
              ><br />
            </div>
            <b-field label="EMAIL">
              <b-input type="email" maxlength="30"> </b-input>
            </b-field>
            <b-field label="MESSAGE">
              <b-input maxlength="500" type="textarea"></b-input>
            </b-field>
            <b-field>
              <b-checkbox>I accept the terms of service</b-checkbox>
            </b-field>
            <b-button type="is-success">SUBMIT</b-button>
          </form>
        </article>
      </div>
    </div>
    <!-- -------------------------------- -->
    <div class="map">
      <div class="wrapper">
        <article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7974754342285!2d15.967324915568545!3d45.79528497910614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b441ce2df%3A0x54e2a03adf42446f!2sTehni%C4%8Dko%20veleu%C4%8Dili%C5%A1te%20u%20Zagrebu!5e0!3m2!1shr!2shr!4v1637181352494!5m2!1shr!2shr"
            height="400"
            width="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </article>
        <article>
          <h2>Other contact information</h2>
          <!-- fix location word breaking on mobile layout-->
          <p class="location">Vrbik 8,</p>
          <p class="location2">10000 Zagreb</p>
          <p class="phone-number">+012 345 6789</p>
          <p class="email">bbrkic@tvz.hr</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
@import "style.css";
</style>
