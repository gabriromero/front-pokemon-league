<template>
  <div class="root">
    <div class="mainCenter">
      <p class="tituloFicha pl-title text-center border border-dark">
        FICHA ENTRENADOR
      </p>
      <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
    </div>
    <div class="container">
      <div class="row row-principal">
        <div class="medallas-perfil izquierda col-sm-2">
          <Medallas :ladoMedalla="'L'" />
        </div>
        <div class="selector_div col-sm-8">
          <div class="row selector">
            <div class="container-perfil">
              <Selector />
            </div>
          </div>
        </div>
        <div class="medallas-perfil derecha col-sm-2">
          <Medallas :ladoMedalla="'R'" />
        </div>
        <div class="medallas-movil">
          <div class="row medallas2">
            <Medallas_Portrait/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
import Medallas from "@/components/Medallas.vue";
import Medallas_Portrait from "@/components/Medallas_Portrait.vue";
export default {
  components: { Selector, Medallas,Medallas_Portrait }
};
</script>
<style scoped>
.container-perfil {
  height: 100%;
  width: 80%;
}
.root {
  text-align: center;
}
.medallas-movil {
  display: none;
}
.row-principal {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 0px;
  margin-left: 0px;
}
.izquierda {
    position: relative;
    left: 60px;
  }
  .derecha {
    position: relative;
    right: 60px;
  }
.selector_div {
  width: 66%;
}
@media (orientation: Portrait) {
  .container-perfil {
    width: 600px;
  }
  .nombreFicha {
    font-size: 2.5vw !important;
  }
  .tituloFicha {
    font-size: 3.5vw !important;
  }
  .medallas-perfil {
    display: none;
  }
  .selector_div {
    width: 100%;
  }
  .medallas-movil {
    display: block;
    justify-content: center;
    width: 600px;
    margin-top: 3%;
  }
  
  
}
.selector {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.container {
  margin-top: 5%;
  margin-bottom: 5%;
}
.perfil {
  border: 1px solid;
  border-color: grey;
  border-radius: 15px;
  background-color: #d9d9d9;
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
}
.tituloFicha {
  border-radius: 20px;
  width: 120%;
  margin: 0 auto;
  padding: 5x;
  font-weight: bold;
  font-size: 1.5vw;
}
.nombreFicha {
  border-radius: 20px;
  margin: 0 auto;
  width: fit-content;
  padding: 15px;
  margin-top: 10px;
  font-size: 1.5vw;
}
.mainCenter {
  margin: auto;
  width: 50%;
  padding: 10px;
  width: fit-content;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
</style>