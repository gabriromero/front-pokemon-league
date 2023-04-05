<template>
  <div id="home">

    <div class="container-fluid">

      <div class="row">
        <div class="col-lg-4">
          <p class="mt-3 text-center">CLASIFICACIÓN</p>
          <Classification />
        </div>
        <div class="col-lg-8">
          <p class="mt-3 text-center" >JORNADA 1</p>
          <Enfrentamientos />
        </div>
      </div>

      <div class="row">
        <div>
          <p class="mt-4 text-center">RUTA JORNADA 1</p>
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

export default {
  name: 'HomeView',
  components: {
    Classification, 
    Enfrentamientos, 
    NormasRuta
  }
}
</script>

<style scoped>

</style>