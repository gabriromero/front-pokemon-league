<template>
  <nav class="pl-navbar align-items-center d-flex">
    <div>
      <router-link :class="{ 'left-padding': !isSmallScreen }" to="/">
        <div class="image-rotating">
          <img class="pl-logo rotate-on-hover" src="@/assets/pokeball.png" alt="">
        </div>
      </router-link>
    </div>
    <div class="text-center">
      <router-link class="pl-pages" v-if="isSmallScreen" to="/combate">
        <img class="pl-nav-icon" src="@/assets/combate.png" alt="">
      </router-link>
      <router-link class="pl-pages" v-else to="/combate">Combate</router-link>

      <router-link class="pl-pages" v-if="isSmallScreen" to="/normas">
        <img class="pl-nav-icon" src="@/assets/normas.png" alt="">
      </router-link>
      <router-link class="pl-pages" v-else to="/normas">Normas</router-link>

      <router-link class="pl-pages" v-if="isSmallScreen" to="/perfil">
        <img class="pl-nav-icon" src="@/assets/trainerPixel.png" alt="">
      </router-link>
      <router-link class="pl-pages" v-else to="/perfil">Perfil</router-link>
    </div>
  </nav>
  <router-view class="mt-5"/>
</template>

<script>

export default {
  data() {
    return {
      isSmallScreen: false
    }
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 650;
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }
}
</script>

<style>
@import '~mdb-ui-kit/css/mdb.min.css';

/* General app */
#app {
  font-family: Pokemon GB, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Navbar stuff */
nav a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ff0000;
}

.pl-navbar {
  background-color: #D9D9D9;
  height: 50px;
  overflow: hidden;
  justify-content: space-between;
  font-size: 1.3em;
  padding: 20px;
}

.pl-logo {
  width: 80px;
}

.pl-nav-icon {
  width: 36px;
  height: 40px;
}

.pl-pages {
  margin: 20px;
}

.left-padding {
  margin-left: 40px;
}

/* Pokeball rotation effect */
.image-rotating {
  position: relative;
  display: inline-block;
}

.image-rotating img {
  transition: transform 0.5s ease-in-out;
}

.image-rotating:hover img {
  transform: rotate(390deg);
}
.image-rotating:not(:hover) img {
  transform: rotate(0deg);
}

</style>
