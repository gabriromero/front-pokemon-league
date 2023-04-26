<template>
  <div class="perfil">
    <div class="carrusel">
      <div class="arrow">
        <img class="img-arrow" v-on:click="cambiarIzquierda" src="@/assets/arrow.png" />
      </div>
      <div v-on:click="cambiarIzquierda" class="container-image carrousel-selector">
        <img v-if="skinsLoaded" class="img-carrusel" :src="require(`@/assets/skins/trainer-${left}.png`)" />
        <span v-else class="loader"></span>
      </div>
      <div class="container-image carrusel-selected">
        <img v-if="skinsLoaded" class="img-carrusel" :src="require(`@/assets/skins/trainer-${middle}.png`)" />
        <span v-else class="loader"></span>
      </div>
      <div v-on:click="cambiarDerecha" class="container-image last carrousel-selector">
        <img v-if="skinsLoaded" class="img-carrusel" :src="require(`@/assets/skins/trainer-${right}.png`)" />
        <span v-else class="loader"></span>
      </div>
      <div class="arrow">
        <img class="img-arrow" v-on:click="cambiarDerecha" src="@/assets/arrow.png" />
      </div>
    </div>
    <div class="container-selected">
      <img v-if="skinsLoaded" class="img-selected" :src="require(`@/assets/skins/trainer-${middle}.png`)" />
      <span v-else class="loader"></span>
    </div>
  </div>
</template>

<script>
import {putProfilePic} from "@/api/perfil";
import { getMyselfProfile } from "@/api/shared";
import { getAvailableSkins } from "@/api/perfil";
export default {
  data() {
    return {
      num_skins: 30,
      profileplayer: "",
      left: "",
      middle: "",
      right: "",
      skinsLoaded: false,
      availableSkins: "",
    };
  },
  methods: {
    async getPlayer() {
      const accessToken = localStorage.getItem("access_token")
      let player = await getMyselfProfile(accessToken)
      this.profileplayer = player.data
      this.setPlayer()
    },
    async retrieveAvailableSkins() {
      this.availableSkins = await getAvailableSkins(this.num_skins);
      this.getPlayer()
    },
    setPlayer() {
      let numProfile = this.getProfilePic(this.profileplayer.profile_pic)

      if(!this.availableSkins.includes(numProfile)){
        this.availableSkins = this.insertarOrdenado(this.availableSkins, numProfile)
      }

      this.left = this.anterior(numProfile)
      this.middle = numProfile
      this.right = this.siguiente(numProfile)
      this.skinsLoaded = true
    },
    getProfilePic(value) {
      let regex = /^trainer-(\d+)$/;
      let match = value.match(regex);
      let number = parseInt(match[1]);
      return number
    },
    cambiarIzquierda() {
      const accessToken = localStorage.getItem("access_token")
      this.left = this.anterior(this.left)
      this.middle = this.anterior(this.middle)
      this.right = this.anterior(this.right)
      putProfilePic(`trainer-${this.middle}`,accessToken)
    },
    cambiarDerecha() {
      const accessToken = localStorage.getItem("access_token")
      this.left = this.siguiente(this.left)
      this.middle = this.siguiente(this.middle)
      this.right = this.siguiente(this.right)
      putProfilePic(`trainer-${this.middle}`,accessToken)
    },
    anterior(value) {
      const index = this.availableSkins.indexOf(value);
      if (index === 0) {
        return this.availableSkins[this.availableSkins.length - 1];
      }
      return this.availableSkins[index - 1];
    },
    siguiente(value) {
      const index = this.availableSkins.indexOf(value);
      if (index === this.availableSkins.length - 1) {
        return this.availableSkins[0];
      }
      return this.availableSkins[index + 1];
    },
    insertarOrdenado(array, numero){
      let i = 0;
      while (i < array.length && array[i] < numero) {
        i++;
      }
      array.splice(i, 0, numero);
      return array;
    }
  },
  mounted(){
    this.retrieveAvailableSkins();
  }
};
</script>

<style scoped>
.loader {
  width: 3vw;
  height: 3vw;
  border: 5px dotted grey;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
.perfil {
  border: 1px, solid, black;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
row {
  height: 10%;
}
.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-arrow {
  width: 50%;
  cursor: pointer;
}
@media (min-width: 900px) {
  .img-arrow {
    width: 50%;
  }
}
@media (max-width: 450px) {
  .img-arrow {
    width: 50% !important;
  }
  .container-image {
    width: 120% !important;
  }
}
@media (max-width: 400px) {
  .img-arrow {
    width: 50% !important;
  }
  .container-image {
    width: 150% !important;
  }
  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1000deg);
  }
} 
}
.arrow:last-child {
  transform: rotate(180deg);
}
.carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.carrusel-selected {
  border: 3px solid;
  border-radius: 20px;
  border-color: #454545;
}
.container-image {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2bdbd;
  margin-right: 5%;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 15px;
}
.last {
  margin-right: 0%;
}
.img-carrusel {
  margin: 0 10px;
  width: 100%;
  height: auto;
  padding: 10%;
}
.container-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px solid #d4d4d4;
  border-radius: 20px;
  text-align: center;
  margin: 20%;
  margin-top: 9%;
  background-color: #d4d4d4;
  outline: 15px solid #888686;
  -webkit-box-shadow: 0 0 0 8px #888686;
}
.img-selected {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.carrousel-selector{
  cursor: pointer;
}
</style>
