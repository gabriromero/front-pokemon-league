<template>
  <div class="medallas panel-body">
    <div class="medalla_gird">
      <div class="medalla ratio ratio-1x1" ref="medalla1" @touchstart="changeBackgroundColorMedalla($refs.medalla1, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla1, '#aaaaaa')">
        <img class="medalla1-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_1.png" @click="sonidoMedalla(1)" />
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla2" @touchstart="changeBackgroundColorMedalla($refs.medalla2, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla2, '#aaaaaa')">
        <img class="medalla2-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_2.png" @click="sonidoMedalla(2)"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla3" @touchstart="changeBackgroundColorMedalla($refs.medalla3, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla3, '#aaaaaa')">
        <img class="medalla3-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_3.png" @click="sonidoMedalla(3)"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla4" @touchstart="changeBackgroundColorMedalla($refs.medalla4, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla4, '#aaaaaa')">
        <img class="medalla4-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_4.png" @click="sonidoMedalla(4)"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla5" @touchstart="changeBackgroundColorMedalla($refs.medalla5, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla5, '#aaaaaa')">
        <img class="medalla5-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_5.png" @click="sonidoMedalla(5)"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla6" @touchstart="changeBackgroundColorMedalla($refs.medalla6, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla6, '#aaaaaa')">
        <img class="medalla6-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_6.png" @click="sonidoMedalla(6)"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla7" @touchstart="changeBackgroundColorMedalla($refs.medalla7, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla7, '#aaaaaa')">
        <img class="medalla7-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_7.png" @click="sonidoMedalla('mondongo')"/>
      </div>
      <div class="medalla ratio ratio-1x1" ref="medalla8" @touchstart="changeBackgroundColorMedalla($refs.medalla8, '#727171')" @touchend="changeBackgroundColorMedalla($refs.medalla8, '#aaaaaa')">
        <img class="medalla8-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_8.png" @click="sonidoMedalla(8)"/>
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
      console.log(nMedalla);
      const sonidoMedalla = new Audio(require(`@/assets/Medallas/Sonidos_Medallas/${nMedalla}.mp3`));
      sonidoMedalla.play();
    },

    changeBackgroundColorMedalla(medalla, color) {
      medalla.style.backgroundColor = color;
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
  width: 60%;
  height: 60%;
  filter: grayscale(100%);
  position: relative;
}
</style>
