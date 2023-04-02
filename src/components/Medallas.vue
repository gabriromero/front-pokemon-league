<template>
  <div class="medallas panel-body col">
    <div class="medalla ratio ratio-1x1">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Céfiro.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Tormenta.png" />
    </div>

    <div class="medalla ratio ratio-1x1">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Colmena.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Mineral.png" />
    </div>
    <div class="medalla ratio ratio-1x1">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Planicie.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Glaciar.png" />
    </div>

    <div class="medalla ratio ratio-1x1">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Niebla.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Dragón.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ladoMedalla: String,
  },
};
</script>


<style scoped>
.medallas {
  background-color: #d9d9d9;
  border-radius: 15px;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid;
  border-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.medalla {
  background-color: #aaaaaa;
  border: 5px solid;
  border-color: #888686;
  border-radius: 15px;
  position: relative;
  display: flex;
  margin-bottom: 20%;
  margin-top: 20%;
  width: 80%;
}
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  padding: 20%;
  filter: grayscale(100%);
}

@media (orientation: Portrait) {
  .medalla {
    margin-top: 7px;
    margin-bottom: 0px;
  }
  .medallas {
    height: 110%;
    margin-left: 2px;
    margin-right: 0px;
  }
  img{
    transform:rotate(90deg);
  }
}
</style>
