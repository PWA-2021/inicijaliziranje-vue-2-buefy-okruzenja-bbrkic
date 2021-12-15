<template>
  <div id="captaincoin">
    <nav class="vertical-navbar">
      <a href="#">CaptainCoin</a>
      <a href="#">Home</a>
      <a href="#">Monthly expenses</a>
      <a href="#">Food</a>
      <a href="#">Transport</a>
      <a href="#">Drinks</a>
    </nav>
    <!-- <div class="menubar">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
    </div> -->
    <div class="wrapper-content">
      <div class="horizontal-navbar">
        <a href="#">CaptainCoin</a>
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="frames">
        <div class="top-buttons">
          <button>Add expense</button>
          <button>Add notes</button>
          <button id="calculator">Calculator</button>
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
                <input type="checkbox" class="element checkbox">
                <span class="element id">Id</span>
                <span class="element day">Day in the week</span>
                <span class="element activity">Activity description</span>
                <span class="element price">Price</span>
              </li>
              <li v-for="expense in expenses" :key="expense.ID">
                <input type="checkbox" class="element checkbox">
                <span class="element id">{{ expense.ID }}</span>
                <span class="element day">{{ expense.day }}</span>
                <span class="element activity">{{ expense.activity }}</span>
                <span class="element price">{{ expense.price }}</span>
              </li>
            </ul>
            <button>Delete activity</button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/assets/to-do.json";

export default {
  data: function () {
    return {
      expenses: json.expenses,
    };
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
// .menubar {
//   width: 25px;
//   height: 30px;
//   display: block;
//   position: absolute;
//   left: 0;
//   margin: 10px 20px;
// }
// .bar {
//   width: 100%;
//   height: 3px;
//   background-color: #ecdbba;
//   border-radius: 10px;
//   margin-bottom: 5px;
//   width: 100%;
//   box-shadow: 2px 2px 6px #000000be;
// }
// .bar1,
// .bar2,
// .bar3 {
//   transition: 0.3s;
// }
// .barclose1 {
//   width: 100%;
//   position: absolute;
//   top: 10px;
//   transform: rotate(45deg);
// }
// .barclose2 {
//   width: 100%;
//   position: absolute;
//   transform: scaleX(0);
//   transform-origin: right;
// }
// .barclose3 {
//   width: 100%;
//   position: absolute;
//   top: 10px;
//   transform: rotate(-45deg);
// }
// .newlinks {
//   transform: translate(0, 0);
//   display: block;
// }
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
}
.expenses{
  margin-top: 20px;
}
.expenses li{
  padding: 5px 10px;
  overflow: hidden;
}
.expenses li:not(:first-child){
  border-bottom: 1px solid #e7e7e7;
}
.expenses li:first-child{
  background-color: #34675146;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
}
.expenses li:first-child span{
  color: #346751;
}
.expenses .element{
  float: left;
}
.expenses li input, 
.expenses .element .id{
  width: 20px;
  float: left;
}
.expenses .element:not(:first-child),
.expenses li:first-child span{
  width: 24%;
  float: left;
}
.price{
}
.expenses input{
  all: unset;
  border: 1px solid #e7e7e7;
  width: 10px;
  height: 20px;
  border-radius: 5px;
}
.id{
  text-indent: 10px;
}
@media screen and (max-width: 992px) {
  // .menubar {
  //   width: 25px;
  //   height: 30px;
  //   display: block;
  //   position: absolute;
  //   z-index: 1;
  //   top: 0;
  // }
  // .bar {
  //   width: 100%;
  //   height: 3px;
  //   border-radius: 10px;
  //   width: 100%;
  //   box-shadow: 2px 2px 6px #000000be;
  // }
  // .bar1,
  // .bar2,
  // .bar3 {
  //   transition: 0.3s;
  // }
  // .barclose1 {
  //   width: 100%;
  //   position: absolute;
  //   top: 10px;
  //   transform: rotate(45deg);
  // }
  // .barclose2 {
  //   width: 100%;
  //   position: absolute;
  //   transform: scaleX(0);
  //   transform-origin: right;
  // }
  // .barclose3 {
  //   width: 100%;
  //   position: absolute;
  //   top: 10px;
  //   transform: rotate(-45deg);
  // }
  // .newlinks {
  //   transform: translate(0, 0);
  //   display: block;
  // }
  // .links {
  //   width: 100%;
  //   transform: translate(-100%, 0);
  //   transition: 0.3s;
  //   background-color: #333;
  //   top: 48px;
  //   display: none;
  // }
}
</style>
