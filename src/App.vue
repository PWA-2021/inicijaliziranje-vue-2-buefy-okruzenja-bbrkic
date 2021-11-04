<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Dobrodošli u Vue 2 za PWA kolegij" />

    <Form />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Form from "./components/Form.vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    Form,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

img {
  display: block;
  margin: 30px auto;
}
</style>
