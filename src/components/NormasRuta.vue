<template>
  <div class="backgroundNormasRuta container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-sm-6">
            <Limites :titulo="'EV`s MÁXIMOS'" :rango="'0 - 75'"></Limites>
          </div>
          <div class="col-sm-6">
            <Limites :titulo="'EV`s MÁXIMOS'" :rango="'0 - 75'"></Limites>
          </div>
        </div>
        <div>
          <Stats />
          <NivelesEquipo />
        </div>
      </div>
      <div class="col-lg-6 d-flex justify-content-center">
        <div class="lateral-padding">
          <ZonasCaptura />
          <NuevasRutas />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Limites from "@/components/Limites.vue";
import Stats from "@/components/Stats.vue";
import NivelesEquipo from "@/components/NivelesEquipo.vue";
import ZonasCaptura from "@/components/ZonasCaptura.vue";
import NuevasRutas from "@/components/NuevasRutas.vue";

export default {
  components: {
    Limites,
    Stats,
    NivelesEquipo,
    ZonasCaptura,
    NuevasRutas,
  },
};
</script>

<style scoped>
.backgroundNormasRuta {
  background-color: #d4d4d4;
}

@media screen and (max-width: 600px) {
  .backgroundNormasRuta {
    padding-left: 25px;
  }
}

@media screen and (min-width: 600px) {
  .lateral-padding {
    padding-left: 5vh;
    padding-right: 5vh;
  }
}
</style>