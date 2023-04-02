<template>
  <div class="root">
    <img
      class="img-background"
      src="@/assets/pokeball_fondo.svg"
      draggable="false"
    />
    <div class="mainCenter">
      <p class="tituloFicha pl-title text-center border border-dark">
        FICHA ENTRENADOR
      </p>
      <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
    </div>
    <div class="container">
      <div class="row row-principal">
        <div class="medallas-perfil col-sm-2">
          <Medallas :ladoMedalla="'L'" />
        </div>
        <div class="selector_div col-sm-8">
          <div class="row selector">
            <div class="container-perfil">
              <Selector />
            </div>
          </div>
        </div>
        <div class="medallas-perfil col-sm-2">
          <Medallas :ladoMedalla="'R'" />
        </div>
        <div class="medallas-movil">
          <div class="row medallas2">
            <Medallas :ladoMedalla="'R'" />
            <Medallas :ladoMedalla="'L'" />
          </div>
        </div>
      </div>
    </div>
    <div class="loggout">
      <p1 >CERRAR SESIÓN</p1>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
import Medallas from "@/components/Medallas.vue";
export default {
  components: { Selector, Medallas },
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
.loggout {
  margin-bottom: 10%;
  font-weight: bold;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
}
.medallas2 {
  transform: rotate(-90deg);
  align-items: center;
  width: 100%;
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
.medallas2 {
  width: 60%;
  height: 110%;
  margin-top: -10%;
  align-content: center;
}
.selector_div {
  width: fit-content;
}
.selector_div {
  width: 60%;
}
@media (orientation: Portrait) {
  .container-perfil {
    width: 90%;
  }
  
  .loggout {
    margin-bottom: 10%;
    font-size: 1rem;
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
    display: inline-flex;
    justify-content: center;
  }
  @media (max-width: 770px) {
    .medallas2 {
      margin-top: -5%;
    }
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
.img-background {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.05;
  display: flex;
}
</style>