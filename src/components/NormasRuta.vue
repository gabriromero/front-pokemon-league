<template>
  <div class="backgroundNormasRuta container-fluid">
    <div class="row">
      <div class="col-sm-3 col-6">
        <Limites :titulo="'STATS BASE'" :rango="'0 - 350'"></Limites>
      </div>
      <div class="col-sm-3 col-6">
        <Limites :titulo="'EV`s MÁXIMOS'" :rango="'0 - 75'"></Limites>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 col-12">
        <Stats />
      </div>
    </div>

    <div class="row">
      <div style="padding-right: 0" class="col-sm-6 col-12">
        <NivelesEquipo />
      </div>
    </div>
  </div>
</template>

<script>
import Limites from "@/components/Limites.vue";
import Stats from "@/components/Stats.vue";
import NivelesEquipo from "@/components/NivelesEquipo.vue";

export default {
  components: {
    Limites,
    Stats,
    NivelesEquipo,
  },
};
</script>

<style scoped>
.backgroundNormasRuta {
  background-color: #d4d4d4;
  width: 100%;
  height: 100%;
  padding-right: 25px;
}

@media screen and (max-width: 600px) {
  .backgroundNormasRuta {
    padding-left: 25px;
  }
}
</style>