<template>
  <div class="register">
    <div class="top-layer"></div>
    <div class="data">
      <router-link to="/" target="self"><h2>CaptainCoin</h2></router-link>
      <h1>Welcome to the club!</h1>
      <p>If everyone is moving forward together, then success takes care of itself! This club is for members only. But once you join, membership lasts for an eternity.</p>
    </div>
    <div class="register-information">
      <h1>Registration</h1>
      <form action="">
        <label for="firstname">Firstname:
          <input type="firstname" id="firstname" name="firstname" placeholder="enter your firstname"/>
        </label>
        <label for="lastname">Lastname:
          <input type="lastname" id="lastname" name="lastname" placeholder="enter your lastname"/>
        </label>
        <label for="email">Email:
          <input type="email" id="email" name="email" placeholder="enter your email"/>
        </label>
        <label for="password">Password:
          <input type="password" id="password" name="password" placeholder="enter your password"/>
        </label>
        <label for="password2">Confirm password:
          <input type="password2" id="password2" name="password2" placeholder="confirm your password"/>
        </label>
        <router-link to="/data" target="self"><button>Create account</button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {
    // register,
  }
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
  background: -webkit-gradient( linear, left top, left bottom, color-stop(0%, #16161613), color-stop(100%, #161616e8));
  position: absolute;
  z-index: 0;
  width: 100%;
}
.data,
.register-information {
  float: left;
}
.register-information {
  width: 40%;
  padding: 6% 5% 5% 5%;
  backdrop-filter: blur(5px);
  background-color: #16161642;
  min-height: 100vh;
}
.data {
  width: 60%;
  padding: 6% 5% 5% 5%;
  float: right;
}
.register-information h1 {
  font-size: 45px;
  text-shadow: 2px 5px 6px #000000be;
  color: #5aa897;
}
.data h2 {
  font-size: 40px;
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
  font-size: 25px;
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
@media screen and (max-width: 992px) {
	.register-information{
		width: 80%;
		margin: 0 10%;
		position: relative;
    z-index: 2;
		min-height: auto;
    border-radius: 15px;
	}
	.top-layer, .register{
		min-height: 130vh;
	}
  .data{
    float: none;
    width: 80%;
    margin: 0 auto;
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
  .data h2{
    text-align: center;
    bottom: 30px;
  }
  .top-layer{
    background: -webkit-gradient( linear, left top, left bottom, color-stop(0%, #1616169a), color-stop(100%, #16161685));
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
  label:nth-child(2){
    padding-bottom: 20px;
  }
  .top-layer,
  .register{
    height: 15   0vh;
  }
  .register-information h1{
    text-align: center;
  }
  form button{
    margin: 40px auto 0 auto;
    display: block;
  }
}
</style>
