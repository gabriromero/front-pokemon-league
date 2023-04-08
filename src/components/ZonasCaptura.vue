<template>
  <div>
    <p class="title text-center">ZONAS DE CAPTURA</p>
    
    <div v-if="jornada" class="divBackground">
        <div class="insideDiv">
            <img id="map" class="img-fluid p-1" style="border-radius: 15px;" :src="require(`@/assets/mapas/mapa_j${jornada}.png`)" alt="">
        </div>
    </div>


  </div>
</template>

<script>
import {getJornada} from "@/helpers/normasHelper.js";
export default {
  data() {
    return {
      jornada: '',
    };
  },
  async mounted() {
    const jornada = await getJornada();
    this.jornada = jornada;
  },
}
</script>

<style scoped>

.divBackground {
  background-color: #C2BDBD;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;  
  margin-bottom: 5%;
  
}

.insideDiv {
  background-color: white;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin: 5px;
  vertical-align: middle;
}

.title{
    font-size: 12px;
    margin-top: 15px;
}

@media screen and (min-width: 601px){
   .title{
    font-size: 15px;
    margin-top: 15px;
   } 
}

@media screen and (max-width: 600px){
   .title{
    font-size: 12px;
    margin-top: 15px;
   }
}

.img-fluid {
  width: 100%;
}

</style>