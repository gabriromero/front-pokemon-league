<template>
  <div class="medallas panel-body col">
    <div class="medalla">
      <div class="medalla_2">
        <img
          v-if="ladoMedalla == 'L'"
          src="@/assets/Medallas/Medalla_C3Ffiro.png"
        />
        <img v-else src="@/assets/Medallas/Medalla_Tormenta.png" />
      </div>
    </div>
    <div class="medalla">
        <div class="medalla_2">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Colmena.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Mineral.png" />
    </div>
</div>
    <div class="medalla">
        <div class="medalla_2">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Planicie.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Glaciar.png" />
    </div>
</div>
    <div class="medalla">
        <div class="medalla_2">
      <img
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medalla_Niebla.png"
      />
      <img v-else src="@/assets/Medallas/Medalla_Drag3Fn.png" />
    </div>
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
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
  border: 2px solid;
  border-color: black;

}
.medalla {
  background-color: #888686;
  border: 1px solid;
  border-color: black;
  border-radius: 15px;  
  width: 100%;
  max-width:100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
}
.medalla_2 {
  background-color: #AAAAAA;
  border: 1px solid;
  border-color: black;
  width: 75%;
  border-radius: 15px;  
  height: 75%;
  position: absolute;
  top: 12.5%;
  left: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
