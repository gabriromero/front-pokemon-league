<template>
  <div class="mainCenter">
    <p class="tituloFicha pl-title text-center border border-dark">
      FICHA ENTRENADOR
    </p>
    <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
  </div>
  <div class="row">
    <div class="border border-5 col-sm-2">
      <Medallas :ladoMedalla="'L'" />
    </div>
    <div class="border border-5 col-sm-8"></div>
    <div class="border border-5 col-sm-2">
      <Medallas :ladoMedalla="'R'"/>
    </div>
  </div>
</template>

<script>
import Medallas from "@/components/Medallas.vue";
export default {
  components: { Medallas },
};
</script>

<style>
.tituloFicha {
  border-radius: 20px;
  width: 75%;
  margin: 0 auto;
  padding: 5x;
  font-weight: bold;
}
.mainCenter {
  margin: auto;
  width: 50%;
  padding: 10px;
  width: fit-content;
}
.medallas img {
  max-width: 100%;
  height: 60%;
  min-height: 50%;
  max-height: 100%;
  filter: grayscale(1);
}
.nombreFicha {
  border-radius: 20px;
  margin: 0 auto;
  width: fit-content;
  padding: 15px;
  margin-top: 10px;
}
.row {
}
</style>