<template>
  <div class="medallas panel-body col">
    <div class="medalla ratio ratio-1x1">
      <img
        class="medalla1"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_1.png"
      />
      <img class="medalla5" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_5.png" />
    </div>

    <div class="medalla ratio ratio-1x1">
      <img
        class="medalla2"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_2.png"
      />
      <img class="medalla6" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_6.png" />
    </div>
    <div class="medalla ratio ratio-1x1">
      <img
        class="medalla3"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_3.png"
      />
      <img class="medalla7" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_7.png" />
    </div>

    <div class="medalla ratio ratio-1x1">
      <img
        class="medalla4"
        v-if="ladoMedalla == 'L'"
        src="@/assets/Medallas/Medallas_Kanto/Medalla_4.png"
      />
      <img class="medalla8" v-else src="@/assets/Medallas/Medallas_Kanto/Medalla_8.png" />
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
    }
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
