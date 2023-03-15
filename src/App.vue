<template>
  <nav class="pl-navbar align-items-center d-flex">
    <div>
      <router-link to="/">
        <div class="image-rotating">
          <img class="pl-logo rotate-on-hover" src="@/assets/pokeball.png" alt="">
        </div>
      </router-link>
      
    </div>
    <div class="text-center">
      <router-link class="pl-pages" to="/combate">COMBATE</router-link>
      <router-link class="pl-pages" to="/normas">NORMAS</router-link>
      <router-link class="pl-pages" to="/perfil">PERFIL</router-link>
    </div>
  </nav>
  <router-view class="mt-5"/>
</template>

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

.pl-pages {
  margin: 30px;
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
