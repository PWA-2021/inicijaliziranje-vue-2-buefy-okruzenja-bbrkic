<template>
  <div id="captaincoin">
    <!-- VERTICAL NAVBAR -->
    <nav class="vertical-navbar">
      <a href="#">CaptainCoin</a>
      <a href="#">Home</a>
      <a href="#">Monthly expenses</a>
      <a href="#">Food</a>
      <a href="#">Transport</a>
      <a href="#">Drinks</a>
    </nav>
    <div class="links">
      <a href="#">Home</a>
      <a href="#">Monthly expenses</a>
      <a href="#">Food</a>
      <a href="#">Transport</a>
      <a href="#">Drinks</a>
    </div>

    <!-- RESPONSIVE HAMBURGER -->
    <div class="menubar">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
    </div>

    <!-- HORIZONTAL NAVBAR -->
    <div class="wrapper-content">
      <div class="horizontal-navbar">
        <a href="#">CaptainCoin</a>
        <i class="fas fa-user-circle"></i>
      </div>

      <!-- DASHBOARD -->
      <div class="frames">
        <!-- TOP BUTTONS -->
        <div class="top-buttons">
          <button id="pop-expenses">Add expense</button>
          <button>Add notes</button>
          <button id="calculator" @click="toggleClass">Calculator</button>
          <button>Calendar</button>
        </div>
        <div class="summary">
          <section>
            <article>
              <h3>Summary</h3>
              <p id="subheading">Overview of the latest expenses</p>
              <h3>$<span>123456</span></h3>
              <p>Totally earned</p>
              <h3>$<span>123</span></h3>
              <p>Totally spent</p>
            </article>
            <article>
              <div class="chart-legend">
                <p>Transport</p>
                <p>Drinks</p>
                <p>Food</p>
              </div>
            </article>
          </section>
        </div>
        <div class="summary-chart">
          <section>
            <div class="chart-legend">
              <p>Transport</p>
              <p>Drinks</p>
              <p>Food</p>
            </div>
          </section>
        </div>
        <div class="icon-frame">
          <section>
            <div class="group-text group1">
              <h3>$123</h3>
              <p>Totally spent</p>
            </div>
          </section>
          <section>
            <div class="group-text group2">
              <h3>$123</h3>
              <p>Totally spent</p>
            </div>
          </section>
          <section>
            <div class="group-text group3">
              <h3>$123</h3>
              <p>Totally spent</p>
            </div>
          </section>
        </div>
        <div class="recent">
          <section>
            <h3>Recent spendings</h3>
            <p id="subheading">Overview of the recent spendings</p>
            <article>
              <i class="fas fa-utensils"></i>
              <p>Dinner in a restaurant</p>
              <h3>$23</h3>
            </article>
            <hr />
            <article>
              <i class="fas fa-utensils"></i>
              <p>Lunch in a restaurant</p>
              <h3>$42</h3>
            </article>
            <hr />
            <article>
              <i class="fas fa-bus-alt"></i>
              <p>Train ride</p>
              <h3>$3</h3>
            </article>
            <hr />
            <article>
              <i class="fas fa-glass-cheers"></i>
              <p>Birthday toast</p>
              <h3>$20</h3>
            </article>
            <hr />
          </section>
        </div>
        <div class="to-do">
          <section>
            <h3>To-do list</h3>
            <p id="subheading">Overview of planned activities</p>

            <ul class="expenses">
              <li>
                <input type="checkbox" class="element checkbox" />
                <span class="element id">Id</span>
                <span class="element day">Day in the week</span>
                <span class="element activity">Activity description</span>
                <span class="element price">Price</span>
              </li>
              <li v-for="expense in expenses" :key="expense.ID">
                <input type="checkbox" class="element checkbox" />
                <span class="element id">{{ expense.ID }}</span>
                <span class="element day">{{ expense.day }}</span>
                <span class="element activity">{{ expense.activity }}</span>
                <span class="element price">{{ expense.price }}</span>
              </li>
            </ul>
            <button>Delete activity</button>
          </section>
        </div>

        <!-- CALCULATOR -->
        <div class="calculator" v-bind:class="{ active: isActive }">
          <i class="fas fa-times-circle" v-bind:class="{ active: isActive }" @click="closeButton"></i>
          <div class="result">{{ current || "0" }}</div>
          <div class="calculator-row">
            <div @click="clear" class="btn">C</div>
            <div @click="sign" class="btn">+/-</div>
            <div @click="percent" class="btn">%</div>
            <div @click="divide" class="btn operator">÷</div>
          </div>
          <div class="calculator-row">
            <div @click="append('7')" class="btn">7</div>
            <div @click="append('8')" class="btn">8</div>
            <div @click="append('9')" class="btn">9</div>
            <div @click="times" class="btn operator">x</div>
          </div>
          <div class="calculator-row">
            <div @click="append('4')" class="btn">4</div>
            <div @click="append('5')" class="btn">5</div>
            <div @click="append('6')" class="btn">6</div>
            <div @click="minus" class="btn operator">-</div>
          </div>
          <div class="calculator-row">
            <div @click="append('1')" class="btn">1</div>
            <div @click="append('2')" class="btn">2</div>
            <div @click="append('3')" class="btn">3</div>
            <div @click="add" class="btn operator">+</div>
          </div>
          <div class="calculator-row">
            <div @click="append('0')" class="btn zero">0</div>
            <div @click="dot" class="btn">.</div>
            <div @click="equal" class="btn operator">=</div>
          </div>
        </div>

        <!-- DARK BACKGROUND OVERLAY -->
        <div class="dark-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/assets/to-do.json";
import isActive from "../views/CaptainCoin.vue";

export default {
  data: function () {
    return {
      expenses: json.expenses,
      isActive: false,
    };
  },
  methods: {
    toggleClass: function () {
      console.log("clicked!!");
      document.querySelector(".calculator").classList.add("active");
      document.querySelector(".dark-bg").classList.add("active");
      isActive = !isActive;
    },
    closeButton: function () {
      console.log("clicked!!");
      document.querySelector(".calculator").classList.remove("active");
      document.querySelector(".dark-bg").classList.remove("active");
      isActive = false;
    }
  },
  mounted: function () {
    console.log(this.expenses);
  },
};
</script>

<style lang="scss" scoped>
#captaincoin {
  background-color: #e7e7e7;
  height: 100vh;
  color: #161616;
}
.menubar {
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;
}
.bar {
  border-radius: 5px;
}
.links {
  display: none;
  width: 100%;
}
.vertical-navbar {
  height: 100%;
  width: 20%;
  position: fixed;
  background-color: #ffffff;
}
.vertical-navbar a:first-child,
.horizontal-navbar a {
  background-color: #346751;
  color: #ecdbba;
  font-weight: bold;
  font-size: 25px;
  border: 0;
}
.vertical-navbar a {
  display: block;
  width: 100%;
  padding: 5px 0 5px 5%;
  color: #161616;
  font-size: 18px;
  border-bottom: 1px solid #e7e7e7;
}
.vertical-navbar a:not(:first-child):hover {
  background-color: #34675146;
  border-left: 4px solid #346751;
  transition: 0.2s;
}
.horizontal-navbar {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #ffffff;
}
.horizontal-navbar i {
  font-size: 30px;
  color: #346751;
  padding: 9px 15px 5px 0;
  position: absolute;
  right: 22.5%;
}
.horizontal-navbar a {
  padding: 5px 0;
  display: inline-block;
  color: transparent;
  background-color: transparent;
}
.wrapper-content {
  width: 80%;
  margin-left: 20%;
  height: 100%;
  overflow: scroll;
}
.top-buttons {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.top-buttons button {
  padding: 10px 0;
  width: 20%;
  text-align: center;
  background-color: #346751;
  font-size: 18px;
  color: #ecdbba;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  font-family: "Dosis", sans-serif !important;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 60%);
}
.frames {
  padding: 3%;
  position: relative;
  top: 47.8px;
}
.frames section {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 20%);
  padding: 1.5%;
  overflow: hidden;
  float: left;
}
.frames section h3 {
  color: #346751;
  font-size: 20px;
}
.frames section span {
  color: #161616;
}
.summary section {
  width: 66%;
  float: left;
  margin-right: 2%;
  min-height: 250px;
}
.frames h3 {
  font-weight: bold;
}
.summary p:not(:last-child) {
  padding-bottom: 12px;
}
#subheading,
.frames p {
  color: #939598;
}
#subheading {
  font-size: 18px;
}
.chart-legend {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.chart-legend p {
  color: #161616;
  display: flex;
}
.chart-legend p::after {
  content: "";
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin: 4px 20px 0 6px;
}
.chart-legend p:nth-child(1)::after {
  background-color: #00009e;
}
.chart-legend p:nth-child(2)::after {
  background-color: #c84b31;
}
.chart-legend p:nth-child(3)::after {
  background-color: #fbb040;
}
.summary article {
  float: left;
}
.summary article:first-child {
  width: 30%;
}
.summary article:last-child {
  width: 70%;
}
.summary-chart section {
  width: 32%;
  float: left;
  min-height: 250px;
}
.summary-chart .chart-legend {
  justify-content: center;
  align-items: flex-end;
}
.icon-frame section {
  width: 32%;
  float: left;
  margin-top: 20px;
}
.icon-frame section:not(:first-child) {
  margin-left: 2%;
}
.frames .group-text h3,
.frames .recent article h3 {
  color: #161616;
}
.group-text::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 40px;
  padding-right: 15px;
  float: left;
  display: block;
}
.group1::before {
  content: "\f2e7";
  color: #fbb040;
}
.group2::before {
  content: "\f55e";
  color: #00009e;
}
.group3::before {
  content: "\f79f";
  color: #c84b31;
}
.recent section {
  width: 32%;
  margin-right: 2%;
  margin-top: 20px;
}
.to-do section {
  width: 66%;
  margin-top: 20px;
}
.fa-utensils {
  color: #fbb040;
}
.fa-bus-alt {
  color: #00009e;
}
.fa-glass-cheers {
  color: #c84b31;
}
.recent section article {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.recent i {
  font-size: 30px;
}
.recent p {
  padding-bottom: 20px;
}
.recent article p {
  padding: 0;
}
hr {
  margin: 5px 0;
}
.heading-row {
  background-color: #34675146;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 5px 20px;
  border-radius: 10px;
}
.heading-row {
  background-color: #34675146;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 5px 20px;
  border-radius: 10px;
}
.heading-row input[type="checkbox"] {
  visibility: hidden;
}
.to-do button {
  background-color: #346751;
  color: #ecdbba;
  display: flex;
  float: right;
  margin-top: 20px;
  border: 0;
  padding: 8px 30px;
  text-align: center;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.expenses {
  margin-top: 20px;
}
.expenses li {
  padding: 5px 10px;
  overflow: hidden;
}
.expenses li:not(:first-child) {
  border-bottom: 1px solid #e7e7e7;
}
.expenses li:first-child {
  background-color: #34675146;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
}
.expenses li:first-child span {
  color: #346751;
}
.expenses .element {
  float: left;
}
.expenses li input,
.expenses .element .id {
  width: 20px;
  float: left;
}
.expenses .element:not(:first-child),
.expenses li:first-child span {
  width: 24%;
  float: left;
}
.expenses input {
  all: unset;
  border: 1px solid #e7e7e7;
  width: 10px;
  height: 20px;
  border-radius: 5px;
}
.id {
  text-indent: 10px;
}
// CARCULATOR STYLING
.calculator {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  padding: 30px;
  font-size: 40px;
  line-height: 100%;
  background-color: #333;
  border-radius: 20px;
  z-index: 3;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 60%);
  transition: 200ms ease-in-out;
}
.calculator.active {
  transform: translate(-50%, -50%) scale(1);
}
.calculator-row {
  display: flex;
  justify-content: space-between;
}
.calculator-row:nth-child(3) .btn:not(:last-child) {
  background-color: #346751;
}
.result {
  background-color: #333;
  color: #ecdbba;
  padding: 20px 0 30px 35px;
  margin-top: 30px;
}
.zero {
  flex: 20%;
  border-radius: 35px !important;
}
.btn {
  background-color: #333;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 60%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 10px;
  padding-top: 15px;
}
.operator {
  background-color: #c84b31;
  color: white;
  padding-top: 10px;
}
// DARK OVERLAY
.dark-bg {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  opacity: 85%;
  background: -webkit-linear-gradient(to bottom, #161616, #333);
  background: linear-gradient(to bottom, #161616, #333);
  pointer-events: none;
  display: none;
}
.dark-bg.active {
  transform: translate(0%, 0%) scale(1);
  display: block;
}
.fa-times-circle {
  color: #c84b31;
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 30px;
  cursor: pointer;
  z-index: 3;
  margin: 10px 30px 30px 0;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 60%);
  border-radius: 50%;
}

@media screen and (max-width: 992px) {
  .newlinks a {
    color: #ecdbba;
    text-transform: uppercase;
    width: 100%;
    display: block;
    font-size: 20px;
    text-indent: 4%;
    padding: 5px 0;
  }
  .links {
    width: 100%;
    transform: translate(-100%, 0);
    transition: 0.3s;
    background-color: #333;
    top: 48px;
    display: none;
  }
  .links a {
    position: relative;
    z-index: 1;
  }
  .links a::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #c84b31;
    transform: scaleX(0);
    transition: 0.3s;
    transform-origin: left;
    z-index: -1;
  }
  .links a:hover::after {
    transform: scaleX(1);
  }
  .horizontal-navbar {
    left: 0;
    top: 0;
    background-color: #346751;
    height: 65px;
  }
  .horizontal-navbar i {
    display: none;
  }
  .horizontal-navbar a {
    text-shadow: 2px 2px 6px #000000be;
    padding: 0 0 5px 3%;
    display: inline-block;
    color: #ecdbba;
    font-size: 40px;
  }
  .newlinks {
    position: fixed;
    z-index: 2;
    transform: translate(0, 0);
    display: block;
    top: 65px;
  }
  .menubar {
    width: 25px;
    height: 30px;
    display: block;
    position: fixed;
    right: 0;
    margin: 18px 20px;
    z-index: 2;
  }
  .bar {
    width: 100%;
    height: 3px;
    background-color: #c84b31;
    border-radius: 10px;
    margin-bottom: 5px;
    width: 100%;
    box-shadow: 2px 2px 6px #000000be;
  }
  .bar1,
  .bar2,
  .bar3 {
    transition: 0.3s;
  }
  .barclose1 {
    top: 10px;
    transform: rotate(45deg);
  }
  .barclose1,
  .barclose2,
  .barclose3 {
    width: 100%;
    position: absolute;
  }
  .barclose2 {
    transform: scaleX(0);
    transform-origin: right;
  }
  .barclose3 {
    top: 10px;
    transform: rotate(-45deg);
  }
  .vertical-navbar {
    display: none;
  }
  .wrapper-content {
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
    overflow: initial;
    min-height: 100%;
  }
  #captaincoin {
    overflow: hidden;
    height: auto;
    padding-bottom: 100px;
  }
  .summary section,
  .summary-chart section,
  .recent section,
  .to-do section {
    width: 100%;
  }
  .frames {
    margin-top: 30px;
  }
  .summary-chart section {
    margin-top: 20px;
  }
}
@media screen and (max-width: 768px) {
  .summary section {
    min-height: auto;
  }
  .summary article:first-child,
  .summary article:last-child {
    width: 100%;
    display: block;
  }
}
</style>
