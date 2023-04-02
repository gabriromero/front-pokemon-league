<template>
  <div class="mainCenter">
    <p class="tituloFicha pl-title text-center border border-dark">
      FICHA ENTRENADOR
    </p>
    <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
  </div>
<<<<<<< HEAD
  <div class="container">
    <div class="row row-principal">
      <div class="medallas-perfil border border-5 col-sm-2">
        <Medallas :ladoMedalla="'L'" />
      </div>
      <div class="selector_div border border-5 col-sm-8">
        <div class="row selector">
          <div class="container-perfil">
            <Selector />
          </div>
        </div>
      </div>
      <div class="medallas-perfil border border-5 col-sm-2">
        <Medallas :ladoMedalla="'R'" />
      </div>
      <div class="medallas-movil">
        <div class="row medallas2 border border-5">
          <Medallas :ladoMedalla="'R'" />
          <Medallas class="medallas3" :ladoMedalla="'L'" />
=======
  <div class="row mainContainer">
    <div class="border border-5 col-sm-2"></div>
    <div class="border border-5 col-sm-8">
      <div class="row selector">
        <div class="container-perfil">
          <Selector />
>>>>>>> main
        </div>
      </div>
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
<<<<<<< HEAD
.medallas2 {
  transform: rotate(270deg);
  align-items: center;
  width: 53.16%;
}
.medallas-movil {
  display: none;
}
.medallas2:last-child {
  transform: rotate(-90deg);
}
.medallas3 .medalla {
  transform: rotate(90deg);
}
.medallas2 .medalla {
  transform: rotate(90deg);
}
.row-principal {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 0px;
  margin-left: 0px;
}
.medallas-perfil {
  display: inline-flex;
  align-items: center;
  padding-right: 0px;
  padding-left: 0px;
}
.selector_div {
  width: fit-content;
}
.selector_div {
  width: 60%;
}
=======
.mainContainer {
  margin: auto;
}
>>>>>>> main
@media (orientation: Portrait) {
  .container-perfil {
    width: 90%;
  }
<<<<<<< HEAD
  .medallas-perfil {
    display: none;
  }
  .selector_div {
    width: 100%;
  }
  .medallas2 {
    width: 60%;
  }
  .medallas-movil {
    display: inline-flex;
    align-content: start;
    align-items: flex-start !important; 
    justify-content: center;
  }
=======
>>>>>>> main
}
.selector {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
<<<<<<< HEAD
.container {
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
=======

>>>>>>> main
.tituloFicha {
  border-radius: 20px;
  width: 75%;
  margin: 0 auto;
  padding: 5x;
  font-weight: bold;
}
.mainCenter {
  margin: auto;
  width: 50%;
  padding: 10px;
  width: fit-content;
}

.nombreFicha {
  border-radius: 20px;
  margin: 0 auto;
  width: fit-content;
  padding: 15px;
  margin-top: 10px;
}
</style>