<template>
  <div id="app">
    <!-- Navbar Component -->
    <navbar-component></navbar-component>
    <!-- <div class="container"> -->
      <router-view></router-view>
    <!-- </div> -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import 'assets/sass/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;800&display=swap');
#app {
  font-family: $primary-font;
}
</style>
