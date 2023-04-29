<template>
  <div class="medallas panel-body">
    <div class="medalla_gird">
      <div class="medalla ratio ratio-1x1" >
        <img class="medalla1-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_1.png" @click="sonidoMedalla(1)" @touchstart="changeBackgroundColorMedalla('.medalla1-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla1-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla2-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_2.png" @click="sonidoMedalla(2)" @touchstart="changeBackgroundColorMedalla('.medalla2-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla2-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla3-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_3.png" @click="sonidoMedalla(3)" @touchstart="changeBackgroundColorMedalla('.medalla3-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla3-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla4-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_4.png" @click="sonidoMedalla(4)" @touchstart="changeBackgroundColorMedalla('.medalla4-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla4-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla5-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_5.png" @click="sonidoMedalla(5)" @touchstart="changeBackgroundColorMedalla('.medalla5-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla5-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla6-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_6.png" @click="sonidoMedalla(6)" @touchstart="changeBackgroundColorMedalla('.medalla6-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla6-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla7-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_7.png" @click="sonidoMedalla('mondongo')" @touchstart="changeBackgroundColorMedalla('.medalla7-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla7-movil', '#aaaaaa')"/>
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla8-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_8.png" @click="sonidoMedalla(8)" @touchstart="changeBackgroundColorMedalla('.medalla8-movil', '#727171')" @touchend="changeBackgroundColorMedalla('.medalla8-movil', '#aaaaaa')"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getJornada } from '@/helpers/normasHelper'
export default {
  data () {
    return {
      jornadaActual: '',      
    }
  },
  async mounted() {
    const jornada = await getJornada();
    this.jornadaActual = jornada;
    this.medallasConseguidas(this.jornadaActual);
  },
  methods: {
    medallasConseguidas(jornadaActual){
      for (let i = 1; i < jornadaActual; i++) {           
        const elementoMedalla = document.querySelector(`.medalla${i}-movil`);   
        elementoMedalla.style.filter = 'grayscale(0%)';
      }
    },

    sonidoMedalla(nMedalla){
      
      let elementoMedalla = null;

      if(nMedalla != 'mondongo'){
        elementoMedalla = document.querySelector(`.medalla${nMedalla}-movil`);
      }else{
        elementoMedalla = document.querySelector('.medalla7-movil');
      }      

      if(elementoMedalla.style.filter === 'grayscale(0%)'){
        const sonidoMedalla = new Audio(require(`@/assets/Medallas/Sonidos_Medallas/${nMedalla}.mp3`));
        sonidoMedalla.play();
      }   
    },

    changeBackgroundColorMedalla(medalla, color) {
      const elementoMedalla = document.querySelector(medalla);            

      if(elementoMedalla.style.filter === 'grayscale(0%)'){
        elementoMedalla.style.backgroundColor = color;
      }
    },

  }
};
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
  padding: 15%;
  height: 60%;
  filter: grayscale(100%);
  position: relative;
}
</style>
