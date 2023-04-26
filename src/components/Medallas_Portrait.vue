<template>
  <div class="medallas panel-body">
    <div class="medalla_gird">
      <div class="medalla ratio ratio-1x1">
        <img class="medalla1-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_1.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla2-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_2.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla3-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_3.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla4-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_4.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla5-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_5.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla6-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_6.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla7-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_7.png" />
      </div>
      <div class="medalla ratio ratio-1x1">
        <img class="medalla8-movil" src="@/assets/Medallas/Medallas_Kanto/Medalla_8.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { getJornada } from '@/helpers/normasHelper'
export default {
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
        const elementoMedalla = document.querySelector(`.medalla${i}-movil`);   
        elementoMedalla.style.filter = 'grayscale(0%)';
      }
    }
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
