<template>
  <div class="backgroundNormasRuta container-fluid">
    <div class="row">
      <div class="col-lg-6 lateral-padding">
        <div class="row">
          <div class="col-6">
            <Limites :titulo="'STATS MÁX'" :rango="`${statsMaximos}`"></Limites>
          </div>
          <div class="col-6">
            <Limites :titulo="'EVs MÁX'" :rango="`${evsMaximos}`"></Limites>
          </div>
        </div>
        <div>
          <Stats />
          <NivelesEquipo />
        </div>
      </div>
      <div class="col-lg-6 lateral-padding">
        <div>
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

import {normasRuta} from "@/helpers/generalHelper.js";

export default {
  data() {
    return {
      statsMaximos : normasRuta["statsMaximos"],
      evsMaximos : normasRuta["evsMaximos"]
    };
  },
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

.lateral-padding {
  padding-left: 5vh;
  padding-right: 5vh;
}
</style>