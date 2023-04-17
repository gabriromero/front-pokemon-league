<template>
  <div class="root">
    <div class="mainCenter">
      <p class="tituloFicha pl-title text-center border border-dark">
        FICHA ENTRENADOR
      </p>
      <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
    </div>
    <div class="principal">
      <div class="row selector_medallas">
        <div class="medallas-perfil izquierda col-2">
          <Medallas :ladoMedalla="'L'" />
        </div>
        <div class="selector-container col-8">
          <Selector />
        </div>
        <div class="medallas-perfil derecha col-2">
          <Medallas :ladoMedalla="'R'" />
        </div>
      </div>
      <div class="medallas-movil">
        <Medallas_Portrait />
      </div>
      <div class="estadisticas-div">
        <ProfileStats />
      </div>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
import Medallas from "@/components/Medallas.vue";
import Medallas_Portrait from "@/components/Medallas_Portrait.vue";
import ProfileStats from "@/components/ProfileStats.vue";
export default {
  components: { Selector, Medallas, Medallas_Portrait, ProfileStats },
};
</script>
<style scoped>
.selector_medallas {
  display: flex;
}
.estadisticas-div {
  display: block;
  justify-content: center;
  margin-top: 3%;
}
.estadisticas {
}
.medallas-movil {
  display: none;
}
.izquierda {
  margin-left: 0;
}
.derecha {
  margin-right: 0;
}
.principal {
  display: block;
  justify-content: center;
  margin-right: 25%;
  margin-left: 25%;
  margin-bottom: 2%;
}
.izquierda {
  position: relative;
}
.derecha {
  position: relative;
}
@media (orientation: Portrait) {
  .nombreFicha {
    font-size: 2.5vw !important;
  }
  .root {
    margin-top: 0px !important;
  }
  .tituloFicha {
    font-size: 3.5vw !important;
  }
  .selector-container {
    width: 100%;
  }
  .medallas-perfil {
    display: none;
  }
  .medallas-movil {
    display: block;
    justify-content: center;
    margin-top: 3%;
  }
  .principal {
    margin-right: 5%;
    margin-left: 5%;
  }
}
.selector {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-around;
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