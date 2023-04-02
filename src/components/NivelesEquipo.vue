<template>
  <p class="title">NIVELES EQUIPO POKÉMON</p>

  <div class="divBackground">
    <div class="insideDiv">
      <div class="row">
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-1" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">12</p>
        </div>
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-2" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">13</p>
        </div>
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-3" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">14</p>
        </div>
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-4" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">-</p>
        </div>
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-5" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">-</p>
        </div>
        <div class="imgDiv col-xl-2 col-4">
          <img class="nivel-pokemon-6" src="@/assets/pokeballSprite.png" />
          <p class="label-nivel-1">-</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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

.nivel-pokemon-1,
.nivel-pokemon-2,
.nivel-pokemon-3 {
  width: 70%;
  height: 70%;
}

.nivel-pokemon-4,
.nivel-pokemon-5,
.nivel-pokemon-6 {
  width: 70%;
  height: 70%;
  filter: blur(3px);
}

.label-nivel-1 {
  text-align: center;
  margin-bottom: 0;
}

.imgDiv {
  text-align: center;
}

</style>

