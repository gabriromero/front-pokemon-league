<template>
  <div class="medallas panel-body">
    <div class="medalla_gird">
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Céfiro.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Colmena.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Planicie.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Niebla.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Tormenta.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Mineral.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Glaciar.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img src="@/assets/Medallas/Medalla_Dragón.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.medalla_gird {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  align-items: center;
  justify-items: center;
  border-radius: 15px;
  background-color: #d9d9d9;
  border: 1px solid;
  border-color: grey;
  width: 100%;
}

.medalla {
  background-color: #aaaaaa;
  border: 5px solid;
  border-color: #888686;
  border-radius: 15px;
  display: flex;
  margin-bottom: 20%;
  margin-top: 20%;
  width: 70%;
  justify-content: center;
  align-items: center;
}
.medalla img {
  width: 60%;
  height: 60%;
  filter: grayscale(100%);
  position: relative;
}
</style>
