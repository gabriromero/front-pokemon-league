<template>
  <div v-if="jornadaActual" id="home">

    <div class="container-fluid">

      <div class="row">
        <div class="col-xl-4 col-lg-5">
          <p class="mt-3 text-center">CLASIFICACIÓN</p>
          <Classification />
        </div>
        <div class="col-xl-8 col-lg-7">
          <p class="mt-3 text-center" >JORNADA {{ jornadaActual }}</p>
          <Enfrentamientos />
        </div>
      </div>

      <div class="row">
        <div>
          <p class="mt-5 text-center">RUTA JORNADA {{ jornadaActual }}</p>
          <NormasRuta />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Classification from '@/components/Classification.vue'
import Enfrentamientos from '@/components/Enfrentamientos.vue'
import NormasRuta from '@/components/NormasRuta.vue'

import { getJornada } from '@/helpers/normasHelper'

export default {
  name: 'HomeView',
  components: {
    Classification, 
    Enfrentamientos, 
    NormasRuta
  },
  data () {
    return {
      jornadaActual: ''
    }
  },
  async mounted() {
    const jornada = await getJornada();
    this.jornadaActual = jornada;
  },
}
</script>

<style scoped>

</style>