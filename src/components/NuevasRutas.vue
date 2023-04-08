<template>
  <div>
    <p class="title text-center">NUEVAS RUTAS</p>

    <div class="divBackground">
      <div class="insideDiv p-3">
        <div class="container">
          <div class="row nombreRuta">
            <div v-for="ruta in rutas" :key="ruta" class="col-md-6 col-12 p-2">
              <button><a :href="ruta[1]" target="_blank">{{ ruta[0] }}</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import {getNormasRuta} from "@/helpers/normasHelper.js";

export default {
  data() {
    return {
      rutas: ''
    }
  },
  async mounted() {
    const normasRuta = await getNormasRuta();
    this.rutas = normasRuta["nuevasRutas"];
  },
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

a {
  text-decoration: none;
  color: inherit;
}
</style>