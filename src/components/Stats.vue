<template>
  <p class="title text-center">STATS POKÉMON</p>

  <div class="row">
    <div class="col-4 ">
      <div class="imgDiv">
        <a :href="`http://en.pokemmo.shoutwiki.com/wiki/${selectedPokemon}`" target="blank"><img class="imgClass" id="imgId" :src="imageUrl" /></a>
      </div>
      <div class="row">
        <div
          v-if="pokemonTypes.length === 1"
          class="col-12 center-vertical"
        >
          <div class="imgTiposSolo1 col-sm-12 col-12">
            <img class="pkmTypeImgSolo1" :src="rutaImgType1" />
          </div>
        </div>
        <div
          v-else-if="pokemonTypes.length === 2"
          class="center-vertical"
        >
          <div class="imgTipos col-6">
            <img class="pkmTypeImg" :src="rutaImgType1" />
          </div>
          <div class="imgTipos col-6">
            <img class="pkmTypeImg" :src="rutaImgType2" />
          </div>
        </div>
      </div>
      <div class="center-vertical mt-2" style="display: block;">
        <div class="divBackground">
          <div class="insideDiv">
            <p class="maxStats">{{ sumaBaseStats }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="namePkmDiv col-8">
      <div class="row">
        <div class="buscadorPkmBackgroundDiv">
          <div class="buscadorPkmInsideDiv">
            <div class="buscadorPkm">
              <select2
                style="text-align: center"
                v-model="selectedPokemon"
                :options="pokemonList"
                id="pokemon-select"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="labelPS col-9" :style="{ width: `calc(${baseStatsPs}/350 * 100%)` }" :class="{ 'gray1-bg': tonoGris1PS, 'gray2-bg': tonoGris2PS, 'gray3-bg': tonoGris3PS, 'gray4-bg': tonoGris4PS}">PS</div>
        <div class="statPS col-3">{{ baseStatsPs }}</div>
      </div>

      <div class="row justify-content-between">
        <div class="labelAtaque col-9" :style="{ width: `calc(${baseStatsAt}/350 * 100%)` }"  :class="{ 'gray1-bg': tonoGris1At, 'gray2-bg': tonoGris2At, 'gray3-bg': tonoGris3At, 'gray4-bg': tonoGris4At}">ATAQUE</div>
        <div class="statAtaque col-3">{{ baseStatsAt }}</div>
      </div>

      <div class="row justify-content-between">
        <div class="labelDefensa col-9" :style="{ width: `calc(${baseStatsDf}/350 * 100%)` }"  :class="{ 'gray1-bg': tonoGris1Df, 'gray2-bg': tonoGris2Df, 'gray3-bg': tonoGris3Df, 'gray4-bg': tonoGris4Df}">DEFENSA</div>
        <div class="statDefensa col-3">{{ baseStatsDf }}</div>
      </div>

      <div class="row justify-content-between">
        <div class="labelAtEsp col-9" :style="{ width: `calc(${baseStatsAtEsp}/350 * 100%)` }"  :class="{ 'gray1-bg': tonoGris1AEsp, 'gray2-bg': tonoGris2AEsp, 'gray3-bg': tonoGris3AEsp, 'gray4-bg': tonoGris4AEsp }">AT.ESP.</div>
        <div class="statAtEsp col-3">{{ baseStatsAtEsp }}</div>
      </div>

      <div class="row justify-content-between">
        <div class="labelDefEsp col-9" :style="{ width: `calc(${baseStatsDfEsp}/350 * 100%)` }"  :class="{ 'gray1-bg': tonoGris1DEsp, 'gray2-bg': tonoGris2DEsp, 'gray3-bg': tonoGris3DEsp, 'gray4-bg': tonoGris4DEsp }">DEF.ESP.</div>
        <div class="statDefEsp col-3">{{ baseStatsDfEsp }}</div>
      </div>

      <div class="row justify-content-between">
        <div class="labelVelocidad col-9" :style="{ width: `calc(${baseStatsVel}/350 * 100%)` }"  :class="{ 'gray1-bg': tonoGris1Vel, 'gray2-bg': tonoGris2Vel, 'gray3-bg': tonoGris3Vel, 'gray4-bg': tonoGris4Vel }">VELOCIDAD</div>
        <div class="statVelocidad col-3">{{ baseStatsVel }}</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
import Select2 from "vue3-select2-component";
import Limites from "@/components/Limites.vue";
import { API_PKM } from "@/helpers/generalHelper";
import { left } from "@popperjs/core";

export default defineComponent({
  components: { Select2, Limites },
  setup() {
    //El método setup es una función que se ejecuta antes de que se monte el componente en la página. En lugar de usar opciones de configuración como data, computed y methods, el método setup utiliza funciones que devuelven objetos que representan el estado y las acciones del componente
    const pokemonList = ref([]);
    const selectedPokemon = ref("");
    const imageUrl = ref("");
    const baseStatsPs = ref("");
    const baseStatsAt = ref("");
    const baseStatsDf = ref("");
    const baseStatsVel = ref("");
    const baseStatsAtEsp = ref("");
    const baseStatsDfEsp = ref("");
    const sumaBaseStats = ref("");
    const pokemonTypes = ref([""]);
    const rutaImgType1 = ref("");
    const rutaImgType2 = ref("");

    const getPokemonList = async () => {
      try {
        const response = await axios.get(`${API_PKM}?limit=649`); //solo queremos mostrar hasta 5a gen
        const options = response.data.results.map((pokemon) => ({
          //todos los datos los metemos en un map para añadirlo después a la constante que usaremos para nutrir el select2
          id: pokemon.name,
          text: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        }));
        pokemonList.value = options; //seteamos la constante con la lista de nombres de los pokes
        let randomPokemon = Math.floor(Math.random() * options.length);
        selectedPokemon.value = options[randomPokemon].id;
        updateCaracterisiticas(); //llamamos a esta función para cambiar tanto la imagen como las stats del poke al primer seleccionado
      } catch (error) {
        console.error(error);
      }
    };

    const updateCaracterisiticas = async () => {
      try {
        const response = await axios.get(`${API_PKM}/${selectedPokemon.value}`); //la constante 'selectedPokemon' sería como el 'myValue' que había antes
        imageUrl.value = (Math.floor(Math.random() * 4000) + 1) == 1 ? response.data.sprites.front_shiny : response.data.sprites.front_default;
        baseStatsPs.value = response.data.stats["0"].base_stat; //obtenemos todas las stats del poke :p
        baseStatsAt.value = response.data.stats["1"].base_stat;
        baseStatsDf.value = response.data.stats["2"].base_stat;
        baseStatsVel.value = response.data.stats["5"].base_stat;
        baseStatsAtEsp.value = response.data.stats["3"].base_stat;
        baseStatsDfEsp.value = response.data.stats["4"].base_stat;
        sumaBaseStats.value =
          baseStatsPs.value +
          baseStatsAt.value +
          baseStatsDf.value +
          baseStatsVel.value +
          baseStatsAtEsp.value +
          baseStatsDfEsp.value;
        pokemonTypes.value = response.data.types.map((type) => type.type.name);
        rutaImgType1.value = require("@/assets/pkmTypes/" +
          pokemonTypes.value[0] +
          ".png");
        rutaImgType2.value = require("@/assets/pkmTypes/" +
          pokemonTypes.value[1] +
          ".png");
      } catch (error) {
        console.error(error);
      }
    };

    return {
      pokemonList,
      selectedPokemon,
      imageUrl,
      baseStatsPs,
      baseStatsAt,
      baseStatsDf,
      baseStatsVel,
      baseStatsAtEsp,
      baseStatsDfEsp,
      sumaBaseStats,
      pokemonTypes,
      rutaImgType1,
      rutaImgType2,
      getPokemonList,
      updateCaracterisiticas,
    };
  },

  computed:{
    tonoGris1PS() {
      return this.baseStatsPs / 320 < 0.25;
    },
    tonoGris2PS() {
      return this.baseStatsPs / 320 >= 0.25 && this.baseStatsPs / 320 <= 0.5;
    },
    tonoGris3PS() {
      return this.baseStatsPs / 320 >= 0.5 && this.baseStatsPs / 320 <= 0.75;
    },
    tonoGris4PS() {
      return this.baseStatsPs / 320 > 0.75;
    },
    tonoGris1At() {
      return this.baseStatsAt / 320 < 0.25;
    },
    tonoGris2At() {
      return this.baseStatsAt / 320 >= 0.25 && this.baseStatsAt / 320 <= 0.5;
    },
    tonoGris3At() {
      return this.baseStatsAt / 320 >= 0.5 && this.baseStatsAt / 320 <= 0.75;
    },
    tonoGris4At() {
      return this.baseStatsAt / 320 > 0.75;
    },
    tonoGris1Df() {
      return this.baseStatsDf / 320 < 0.25;
    },
    tonoGris2Df() {
      return this.baseStatsDf / 320 >= 0.25 && this.baseStatsDf / 320 <= 0.5;
    },
    tonoGris3Df() {
      return this.baseStatsDf / 320 >= 0.5 && this.baseStatsDf / 320 <= 0.75;
    },
    tonoGris4Df() {
      return this.baseStatsDf / 320 > 0.75;
    },
    tonoGris1AEsp() {
      return this.baseStatsAtEsp / 320 < 0.25;
    },
    tonoGris2AEsp() {
      return this.baseStatsAtEsp / 320 >= 0.25 && this.baseStatsAtEsp / 320 <= 0.5;
    },
    tonoGris3AEsp() {
      return this.baseStatsAtEsp / 320 >= 0.5 && this.baseStatsAtEsp / 320 <= 0.75;
    },
    tonoGris4AEsp() {
      return this.baseStatsAtEsp / 320 > 0.75;
    },
    tonoGris1DEsp() {
      return this.baseStatsDfEsp / 320 < 0.25;
    },
    tonoGris2DEsp() {
      return this.baseStatsDfEsp / 320 >= 0.25 && this.baseStatsDfEsp / 320 <= 0.5;
    },
    tonoGris3DEsp() {
      return this.baseStatsDfEsp / 320 >= 0.5 && this.baseStatsDfEsp / 320 <= 0.75;
    },
    tonoGris4DEsp() {
      return this.baseStatsDfEsp / 320 > 0.75;
    },
    tonoGris1Vel() {
      return this.baseStatsVel / 320 < 0.25;
    },
    tonoGris2Vel() {
      return this.baseStatsVel / 320 >= 0.25 && this.baseStatsVel / 320 <= 0.5;
    },
    tonoGris3Vel() {
      return this.baseStatsVel / 320 >= 0.5 && this.baseStatsVel / 320 <= 0.75;
    },
    tonoGris4Vel() {
      return this.baseStatsVel / 320 > 0.75;
    },
  },

  mounted() {
    this.getPokemonList();
    window.addEventListener('resize', this.handleResize);
  },
  watch: {
    //método que observa cambios en el componente. En este caso, cuando hay un cambio en la variable 'selectedPôkemon' ejecuta updateImage() para cambiar la imagen del div
    selectedPokemon: function () {
      this.updateCaracterisiticas();
    },
  },

  
});
</script>
  
<style scoped>
.imgDiv {
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: white;
  margin-bottom: 10px;
  /*min-height: 300px;
  max-height: 300px;*/
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}

.imgClass {
  /*width: 100%;*/
  /*height: 100%;*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 5% 2% 5% 2%;
  vertical-align: middle;
}

.namePkmDiv {
  margin-bottom: 10px;
}

.pkmTypeImg {
  width: 100%;
  height: 100%;
  filter: grayscale(60%);
}

.pkmTypeImgSolo1 {
  width: 50%;
  height: 90%;
  filter: grayscale(60%);
}

.imgTipos {
  margin-bottom: 10px;
}

.imgTiposSolo1 {
  margin-bottom: 10px;
  text-align: center;
}

.buscadorPkm {
  width: 100%;
}

.buscadorPkmBackgroundDiv {
  border: 1px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: #c2bdbd;
  width: 97.5%;
}

.buscadorPkmInsideDiv {
  margin: 5px 5px 5px 0px;
  width: 100%;
}

.inputPkm,
.inputPkm:focus {
  border: 0 !important;
  outline: none !important;
}

.labelPS,
.labelAtaque,
.labelDefensa,
.labelVelocidad,
.labelAtEsp,
.labelDefEsp {
  margin-top: 4%;
  padding-left: 20px;
  font-weight: bold;
  display: flex;
  align-content: center;
  align-items: center;
}

.statPS,
.statAtaque,
.statDefensa,
.statVelocidad,
.statAtEsp,
.statDefEsp {
  margin-top: 4%;
  text-align: center;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: white;
  margin-left: -10px;
}

.divStatsBase {
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: #c2bdbd;
}

.divStatsBaseInside {
  background-color: white;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin: 5px -5px 5px -5px;
  vertical-align: middle;
}

.valorStatBase {
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
}

.center-vertical{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 601px) {
  .title {
    font-size: 15px;
    margin-top: 15px;
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 12px;
    margin-top: 15px;
  }

  .labelPS,
  .labelAtaque,
  .labelDefensa,
  .labelVelocidad,
  .labelAtEsp,
  .labelDefEsp {
    font-size: 0.9em;
    display: flex;
    align-content: center;
    align-items: center;
    
  }

  .namePkmDiv{
    font-size: 0.6em;
  }

  .divStatsBase {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 991px) {
  .divStatsBase {
    margin-bottom: 15px;
  }
}

.divBackground {
  background-color: #C2BDBD;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;  
  margin-bottom: 5%;
}

.insideDiv {
  background-color: white;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin: 5px;
  vertical-align: middle;
}

.maxStats {
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
}

.gray1-bg {
  background-color: rgba(0, 0, 0, 0.2);
}
.gray2-bg {
  background-color: rgba(0, 0, 0, 0.3);
}
.gray3-bg {
  background-color: rgba(0, 0, 0, 0.4);
}
.gray4-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>