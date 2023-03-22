<template>
  <div id="home">

    <div class="container-fluid">

      <div class="row">
        <div class="col-lg-4 border">
          <p class="pl-title text-center">CLASIFICACIÓN</p>
          <Classification />
        </div>
        <div class="col-lg-8 border">
          <p class="jornadaTitle text-center" >JORNADA 1</p>
          <Enfrentamientos />
        </div>
      </div>

      <div class="row border">
        <div>
          <p class="pl-title text-center">RUTA JORNADA 1</p>
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
.pl-title {
  font-size: 1.3em;
  padding-top: 5%;
}

.jornadaTitle{
  font-size: 1.3em;
  padding-top: 2.2%;
}

</style>