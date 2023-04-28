<template>
  <div class="medallas panel-body col">
    <div class="medalla ratio ratio-1x1" ref="medalla1" @mousedown="changeBackgroundColorMedalla($refs.medalla1, '#727171')" @mouseup="changeBackgroundColorMedalla($refs.medalla1, '#aaaaaa')">
      <img
        class="medalla1"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_1.png"
        @click="sonidoMedalla(1)"        
      />
      <img class="medalla5" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_5.png" @click="sonidoMedalla(5)" />
    </div>

    <div class="medalla ratio ratio-1x1" ref="medalla2" @mousedown="changeBackgroundColorMedalla($refs.medalla2, '#727171')" @mouseup="changeBackgroundColorMedalla($refs.medalla2, '#aaaaaa')">
      <img
        class="medalla2"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_2.png"
        @click="sonidoMedalla(2)"        
      />
      <img class="medalla6" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_6.png" @click="sonidoMedalla(6)"/>
    </div>
    <div class="medalla ratio ratio-1x1" ref="medalla3" @mousedown="changeBackgroundColorMedalla($refs.medalla3, '#727171')" @mouseup="changeBackgroundColorMedalla($refs.medalla3, '#aaaaaa')">
      <img
        class="medalla3"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_3.png"
        @click="sonidoMedalla(3)"        
      />
      <img class="medalla7" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_7.png" @click="sonidoMedalla('mondongo')"/>
    </div>

    <div class="medalla ratio ratio-1x1" ref="medalla4" @mousedown="changeBackgroundColorMedalla($refs.medalla4, '#727171')" @mouseup="changeBackgroundColorMedalla($refs.medalla4, '#aaaaaa')">
      <img
        class="medalla4"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_4.png"
        @click="sonidoMedalla(4)"        
      />
      <img class="medalla8" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_8.png" @click="sonidoMedalla(8)"/>
    </div>
  </div>
</template>

<script>
import { getJornada } from '@/helpers/normasHelper'
export default {
  props: {
    ladoMedalla: String,
  },
  data () {
    return {
      jornadaActual: ''
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
        const elementoMedalla = document.querySelector(`.medalla${i}`);   
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
.medallas {
  background-color: #d9d9d9;
  border-radius: 15px;
  border: 1px solid;
  border-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.medalla {
  background-color: #aaaaaa;
  border: 5px solid;
  border-color: #888686;
  border-radius: 15px;
  position: relative;
  display: flex;
  margin-bottom: 20%;
  margin-top: 20%;
  width: 80%;
}
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  padding: 20%;
  filter: grayscale(100%);
}
@media (orientation: Portrait) {
  .medalla {
    margin-top: 7px;
    margin-bottom: 0px;
  }
  .medallas {
    height: 110%;
    margin-left: 2px;
    margin-right: 0px;
  }
  img{
    transform:rotate(90deg);
  }
}
</style>
