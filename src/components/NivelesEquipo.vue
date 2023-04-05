<template>
  <p class="title text-center mt-4">NIVELES EQUIPO POKÉMON</p>

  <div class="divBackground">
    <div class="insideDiv">
      <div class="row">
        <div v-for="(item, index) in nivelesPokemon" :key="index" class="imgDiv col-4 col-sm-2">
          <img class="pokemon-visible" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">{{item}}</p>
        </div>
        <div v-for="n in difference" :key="n" class="imgDiv col-4 col-sm-2">
          <img class="pokemon-blur" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">-</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {normasRuta} from "@/helpers/generalHelper.js";

export default {
  data() {
    return {
      nivelesPokemon : normasRuta["nivelesPokemon"],
      difference : 6 - normasRuta["nivelesPokemon"].length,
    };
  },
};
</script>
  
<style scoped>
.title {
  font-size: 15px;
}

.divBackground {
  background-color: #c2bdbd;
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

.pokemon-visible {
  width: 70%;
  height: auto;
}

.pokemon-blur {
  width: 70%;
  height: auto;
  filter: blur(3px) grayscale(100%);
}

.label-nivel-1 {
  text-align: center;
  margin-bottom: 0;
}

.imgDiv {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 12px;
    margin-top: 15px;
  }
}

</style>

