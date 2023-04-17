<template>
  <p class="title text-center">STATS POKÉMON</p>

  <div class="row">
    <div class="col-4 ">
      <div class="imgDiv" :style="{backgroundImage: typeGradient()}">
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
          <div class="insideDiv" :style="{backgroundColor: superaStats()}">
            <p class="maxStats">{{ sumaBaseStats }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="namePkmDiv col-8 leftPadding">
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

      <div class="row justify-content-between divEstadistica">
        <div class="labelPS col-9" :style="{ width: setLabelWidth(baseStatsPs), backgroundColor: setGradientColor(baseStatsPs) }">PS</div>
        <div class="statPS col-3">{{ baseStatsPs }}</div>
      </div>

      <div class="row justify-content-between divEstadistica">
        <div class="labelAtaque col-9" :style="{ width: setLabelWidth(baseStatsAt), backgroundColor: setGradientColor(baseStatsAt) }">ATAQUE</div>
        <div class="statAtaque col-3">{{ baseStatsAt }}</div>
      </div>

      <div class="row justify-content-between divEstadistica">
        <div class="labelDefensa col-9" :style="{ width: setLabelWidth(baseStatsDf), backgroundColor: setGradientColor(baseStatsDf) }">DEFENSA</div>
        <div class="statDefensa col-3">{{ baseStatsDf }}</div>
      </div>

      <div class="row justify-content-between divEstadistica">
        <div class="labelAtEsp col-9" :style="{ width: setLabelWidth(baseStatsAtEsp), backgroundColor: setGradientColor(baseStatsAtEsp) }">AT.ESP.</div>
        <div class="statAtEsp col-3">{{ baseStatsAtEsp }}</div>
      </div>

      <div class="row justify-content-between divEstadistica">
        <div class="labelDefEsp col-9" :style="{ width: setLabelWidth(baseStatsDfEsp), backgroundColor: setGradientColor(baseStatsDfEsp) }">DEF.ESP.</div>
        <div class="statDefEsp col-3">{{ baseStatsDfEsp }}</div>
      </div>

      <div class="row justify-content-between divEstadistica">
        <div class="labelVelocidad col-9" :style="{ width: setLabelWidth(baseStatsVel), backgroundColor: setGradientColor(baseStatsVel) }">VELOCIDAD</div>
        <div class="statVelocidad col-3">{{ baseStatsVel }}</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref } from "vue";
import Select2 from "vue3-select2-component";
import Limites from "@/components/Limites.vue";
import { getApiPokemonList, getApiPokemonData } from "@/api/home";

export default defineComponent({
  components: { Select2, Limites },
  props: {
    statsMaximos: Number
  },
  data() {
    return {
      maxPokedex: 649,
      pokemonList: [],
      selectedPokemon: '',
      imageUrl: '',
      baseStatsPs: '',
      baseStatsAt: '',
      baseStatsDf: '',
      baseStatsVel: '',
      baseStatsAtEsp: '',
      baseStatsDfEsp: '',
      sumaBaseStats: '',
      pokemonTypes: [],
      rutaImgType1: '',
      rutaImgType2: ''
    };
  },
  methods:{
    async getPokemonList(){
      try {
        const response = await getApiPokemonList(this.maxPokedex); 

        this.pokemonList = response.data.results.map((pokemon) => ({
          id: pokemon.name,
          text: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        }));
        
        let randomPokemon = Math.floor(Math.random() * this.pokemonList.length);
        this.selectedPokemon = this.pokemonList[randomPokemon].id;
      } 
      catch (error) {
        console.error(error);
      }
    },
    async updateCaracterisiticas(){
      try {
        const response = await getApiPokemonData(this.selectedPokemon);
        this.updateImageUrl(response);
        this.updateBaseStats(response);
        this.updateSumaBaseStats();
        this.updatePokemonTypes(response);
        this.updateRutaImgTypes();
      } catch (error) {
        console.error(error);
      }
    },
    updateImageUrl(response) {
  this.imageUrl = (Math.floor(Math.random() * 4000) + 1) == 1 ? response.data.sprites.front_shiny : response.data.sprites.front_default;
    },

    updateBaseStats(response) {
      this.baseStatsPs = response.data.stats["0"].base_stat;
      this.baseStatsAt = response.data.stats["1"].base_stat;
      this.baseStatsDf = response.data.stats["2"].base_stat;
      this.baseStatsVel = response.data.stats["5"].base_stat;
      this.baseStatsAtEsp = response.data.stats["3"].base_stat;
      this.baseStatsDfEsp = response.data.stats["4"].base_stat;
    },

    updateSumaBaseStats() {
      this.sumaBaseStats = this.baseStatsPs + this.baseStatsAt + this.baseStatsDf + this.baseStatsVel + this.baseStatsAtEsp + this.baseStatsDfEsp;
    },

    updatePokemonTypes(response) {
      this.pokemonTypes = response.data.types.map(type => type.type.name);
    },

    updateRutaImgTypes() {
      this.rutaImgType1 = require(`@/assets/pkmTypes/${this.pokemonTypes[0]}.png`);
      if (this.pokemonTypes[1]) {
        this.rutaImgType2 = require(`@/assets/pkmTypes/${this.pokemonTypes[1]}.png`);
      }
    },
    setGradientColor(stats){
      let minRange = 0.2;
      let maxRange = 0.5;
      let limit = 255;

      let differene = maxRange - minRange;
      let range = stats/limit*differene+minRange;

      return `rgba(0, 0, 0, ${range})`;
    },
    setLabelWidth(stats){
      let maxWidth = 350;
      let percentage = stats/maxWidth*100;

      return `calc(${percentage}%)`
    },
    superaStats() {
      if ( this.sumaBaseStats > this.statsMaximos ) {
        return '#F3B6AC';
      } else {
        return '#CFF3AC';
      }
    },
    typeGradient() {
      let typeHexColor = {
        normal: '#E0E0D6',
        fighting: '#ECCECD',
        flying: '#DBE0F9',
        poison: '#D8A9D5',
        ground: '#CFC097',
        rock: '#E1DCC7',
        bug: '#D6DEA5',
        ghost: '#959099',
        steel: '#D0D0E1',
        fire: '#FFAC93',
        water: '#A3B3E7',
        grass: '#CBF8C3',
        electric: '#F5E8AF',
        psychic: '#FABDC9',
        ice: '#D5EEEE',
        dragon: '#C0B1FB',
        dark: '#8C8785',
        fairy: '#EDCEE0',
      }

      let type1 = this.pokemonTypes[0];
      let type2 = this.pokemonTypes[1];
      if (type2) {
        return `linear-gradient(to right, ${typeHexColor[type1]} ,${typeHexColor[type2]} )`;
      } else {
        return `linear-gradient(to bottom, white, ${typeHexColor[type1]})`;
      }
    },
  },
  mounted() {
    this.getPokemonList();
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

@media screen and (min-width: 992px) {
  .leftPadding{
    padding-left: 5%;
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

.divEstadistica{
  padding-right: 12px;
}
</style>