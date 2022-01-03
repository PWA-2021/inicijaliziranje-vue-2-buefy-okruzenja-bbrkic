<template>
  <div class="data-information">
    <div class="dark-bg-data"></div>
    <h1>Budget Calculator</h1>
    <hr class="heading-underline" />
    <p>
      Give us a few information about your finances so we could help you use our
      budget calculator and take control of your spending.
    </p>
    <div class="left-divs">
      <div class="monthly-incomes">
        <h2>Monthly incomes</h2>
        <select name="incomes" id="incomes">
          <option value="salary">Salary</option>
          <option value="scholarship">Scholarship</option>
          <option value="retirement-income">Retirement income</option>
        </select>
        <input type="number" placeholder="amount of money" />
        <button>Submit</button>
      </div>
      <div class="payment-date">
        <h2>Which day do you normally get payed?</h2>
        <input type="date" />
        <button>Submit</button>
      </div>
      <div class="other-expenses">
        <h2>Important monthly expenses</h2>
        <h3>Shelter</h3>
        <input type="number" placeholder="rent, mortgage, etc." />
        <hr />
        <h3>Taxes</h3>
        <input type="number" placeholder="taxes, etc." />
        <button>Submit</button>
      </div>
    </div>
    <div class="right-divs">
      <div class="monthly-expenses">
        <h2>Average monthly expenses</h2>
        <h3>Food</h3>
        <input
          type="number"
          placeholder="groceries, orders, restaurants, etc."
        />
        <hr />
        <h3>Drinks</h3>
        <input type="number" placeholder="bars, pubs, to-go drinks, etc." />
        <hr />
        <h3>Transportation</h3>
        <input type="number" placeholder="gas, fuel, public transport, etc." />
        <button>Submit</button>
      </div>
      <div class="continuous-expenses">
        <h2>Continuous expenses</h2>
        <h3>Health</h3>
        <input
          type="number"
          placeholder="insurance, medications, doctor visits, etc."
        />
        <hr />
        <h3>Student loans</h3>
        <input type="number" placeholder="interest/principal payments, etc." />
        <button>Submit</button>
      </div>
    </div>
    <div class="bottom-buttons">
      <router-link to="/register" target="self"
        ><button id="back">Go back to registration</button></router-link
      >
      <router-link to="/captaincoin" target="self"
        ><button id="next">Submit and go to CaptainCoin</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// fonts
body {
  font-family: "Dosis", sans-serif !important;
}
.heading-underline {
  border-bottom: 4px solid #c84b31;
  border-radius: 8px;
  width: 100px;
  margin: 0 auto;
}
.dark-bg-data {
  min-height: 190vh;
  position: absolute;
  z-index: -1;
  width: 100%;
  background-color: #eeeeee;
}
.left-divs,
.right-divs {
  width: 40%;
  float: left;
  margin: 5% 2% 5% 8%;
}
.right-divs {
  margin: 5% 8% 5% 2%;
}
.data-information h1,
.data-information p {
  text-align: center;
}
.data-information h1 {
  font-size: 50px;
  font-weight: bold;
  padding-top: 30px;
}
.data-information p {
  font-size: 20px;
  width: 80%;
  margin: 2% auto 0 auto;
}
.left-divs > div,
.right-divs > div {
  position: relative;
  z-index: 1;
  border-radius: 15px;
  padding: 5%;
  box-shadow: 0 2px 12px 1px rgb(0 0 0 / 20%);
  overflow: hidden;
  background-color: #fff;
}
.left-divs > div h2,
.right-divs > div h2 {
  color: #346751;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 20px;
}
.left-divs > div:not(:first-child),
.right-divs > div:not(:first-child) {
  margin-top: 40px;
}
.left-divs > div h3,
.right-divs > div h3 {
  color: #346751;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
select,
input {
  padding: 10px 2%;
  border-radius: 5px;
  border: 1px solid #3467516c;
}
input:focus {
  box-shadow: 2px 2px 5px #34675177;
  transition: 0.2s;
  background-color: #3467512f;
}
.monthly-incomes select {
  width: 30%;
  margin-right: 5%;
}
.monthly-incomes input {
  width: 65%;
}
select:focus,
input:focus {
  outline: none;
}
.left-divs > div button,
.right-divs > div button {
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 15px;
  padding: 5px 30px;
  float: right;
  background-color: #346751;
  color: #e7e7e7;
  border-radius: 5px;
  border: 1px solid #346751;
  cursor: pointer;
  font-family: "Dosis", sans-serif;
}
.monthly-expenses input,
.other-expenses input,
.continuous-expenses input {
  width: 100%;
}
#back,
#next {
  width: 250px;
  padding: 10px 0px;
  border-radius: 8px;
  border: 1px solid transparent;
  color: #e7e7e7;
  text-transform: uppercase;
  cursor: pointer;
  transition: 1s;
  font-family: "Dosis", sans-serif !important;
  font-size: 15px;
}
#back {
  float: left;
  background-color: #c84b31;
}
#next {
  background-color: #346751;
  float: right;
  transition: 0.2s;
  padding-left: 11px;
}
#back {
  transition: 0.2s;
  padding-left: 5px;
}
#next::after,
#back::after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f061";
  transition: opacity 0.2s;
  opacity: 0;
  padding-left: 6px;
}
#back::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f060";
  transition: opacity 0.2s;
  opacity: 0;
  padding-right: 6px;
}
#next:hover {
  background-color: #2a4d3d;
  padding-left: 2px;
}
#back:hover {
  background-color: #a73f2a;
  padding-left: 12px;
}
#next:hover::after,
#back:hover::before {
  opacity: 1;
}
.bottom-buttons {
  margin: 0 8%;
}

// ::before contents
.monthly-incomes h2::before,
.payment-date h2::before,
.continuous-expenses h2::before,
.other-expenses h2::before,
.monthly-expenses h2::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}
.monthly-incomes h2::before {
  content: "\f4d3";
}
.payment-date h2::before {
  content: "\f783";
}
.continuous-expenses h2::before {
  content: "\f2f9";
}
.other-expenses h2::before {
  content: "\f005";
}
.monthly-expenses h2::before {
  content: "\f688";
}
// ::before contents
@media screen and (max-width: 992px) {
  .dark-bg-data {
    overflow: hidden;
    height: 320vh;
  }
  .right-divs,
  .left-divs {
    width: 90%;
    margin: 0 auto;
    float: none;
  }
  .left-divs {
    padding: 40px 0;
  }
  .bottom-buttons {
    padding: 40px 0;
    margin: 0 auto;
    width: 90%;
    overflow: hidden;
  }
}
@media screen and (max-width: 768px) {
  #next,
  #back {
    float: none;
    margin: 15px auto;
    display: block;
    width: 100%;
  }
}
</style>
