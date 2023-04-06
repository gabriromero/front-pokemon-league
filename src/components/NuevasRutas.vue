<template>
  <div>
    <p class="title text-center">NUEVAS RUTAS</p>

    <div class="divBackground">
      <div class="insideDiv p-3">
        <div class="container">
          <div class="row nombreRuta">
            <div v-for="(grupo, index) in grupos" :key="index" class="col-md-6 col-12">
              <div v-if="grupo[0]" class="ruta">{{ grupo[0] }}</div>
              <div v-if="grupo[1]" class="ruta">{{ grupo[1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import {normasRuta} from "@/helpers/generalHelper.js";

export default {
  data() {
    return {
      rutas: normasRuta["nuevasRutas"]
    }
  },
  computed: {
    grupos() {
      let grupos = [];
      for (let i = 0; i < this.rutas.length; i += 2) {
        if (i === this.rutas.length - 1) {
          grupos.push([this.rutas[i]]);
        } else {
          grupos.push([this.rutas[i], this.rutas[i + 1]]);
        }
      }
      return grupos;
    }
  }
};
</script>
  
<style scoped>
.divBackground {
  background-color: #c2bdbd;
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

.title {
  font-size: 12px;
  margin-top: 15px;
}

.divRutas {
  padding: 2%;
}

.nombreRuta {
  margin-bottom: 0;
  font-size: 11px;
  text-align: center;
}

@media (min-width: 768px) {
  .ruta {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .ruta {
    text-align: center;
  }
}
</style>