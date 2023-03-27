<template>
  <nav class="pl-navbar align-items-center d-flex">
    <div>
      <router-link :class="{ 'left-padding': !isSmallScreen }" to="/">
        <div class="image-rotating">
          <img
            v-on:click="getRandomBall()"
            class="pl-logo rotate-on-hover"
            :src="require(`./assets/` + ball + `.png`)"
            alt=""
          />
        </div>
      </router-link>
    </div>
    <div class="text-center">
      <router-link class="pl-pages" v-if="isSmallScreen" to="/combate" @click="showPopup = true">
        <img class="pl-nav-icon" src="@/assets/combate.png" alt="" />
      </router-link>
      <router-link class="pl-pages" v-else to="/combate" @click="showPopup = true">Combate</router-link>

      <router-link class="pl-pages" v-if="isSmallScreen" to="/normas">
        <img class="pl-nav-icon" src="@/assets/normas.png" alt="" />
      </router-link>
      <router-link class="pl-pages" v-else to="/normas">Normas</router-link>

      <router-link class="pl-pages" v-if="isSmallScreen" to="/perfil" @click="showPopup = true">
        <img class="pl-nav-icon" src="@/assets/trainerPixel.png" alt="" />
      </router-link>
      <router-link class="pl-pages" v-else to="/perfil" @click="showPopup = true">Perfil</router-link>
    </div>
  </nav>
  

  
    
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <div class="popup-content">
          <p>Login</p>
          <input style="text-align: center;" placeholder="user#password" type="text" v-model="inputValue" />
        <div class="row" style="margin-top: 10px; width: 100%;">
          <button class="col-sm-6" style="float: left;">Aceptar</button>
          <button class="col-sm-6" @click="closePopup" style="float: right;">Cerrar</button>
        </div>          
        </div>
      </div>
    </div>
  

  <router-view class="mt-5" />
</template>

<script>
export default {
  data() {
    return {
      isSmallScreen: false,
      ball: "pokeball",
      showPopup: false,
      inputValue: "",
    };
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 650;
      this.ball = "pokeball";
    },
    getRandomBall() {
      let rnd = Math.floor(Math.random() * 4000) + 1;

      if (rnd < 3800) {
        this.ball = "pokeball";
      } else if (rnd >= 3800 && rnd < 3960) {
        this.ball = "superball_k4xg";
      } else if (rnd >= 3960 && rnd < 4000) {
        this.ball = "ultraball_7ns0";
      } else if (rnd == 4000) {
        this.ball = "masterball_9bb4";
      }
    },
    closePopup() {
      this.showPopup = false;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    this.getRandomBall();    
  },
  
};
</script>

<style>
@import "~mdb-ui-kit/css/mdb.min.css";

@font-face {
  font-family: Pokemon GB;
  src: url("@/assets/fonts/PokemonGb.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

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
  background-color: #d9d9d9;
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
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: white;
  padding: 20px;
  z-index: 9999;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
