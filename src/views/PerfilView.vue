<template>
  <div class="mainCenter">
    <p class="tituloFicha pl-title text-center border border-dark">
      FICHA ENTRENADOR
    </p>
    <p class="nombreFicha pl-title text-center border border-dark">Guzzom</p>
  </div>
  <div class="row mainContainer">
    <div class="border border-5 col-sm-2"></div>
    <div class="border border-5 col-sm-8">
      <div class="row selector">
        <div class="container-perfil">
          <Selector />
        </div>
      </div>
      <div class="row"></div>
    </div>
    <div class="border border-5 col-sm-2"></div>
  </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
export default {
  components: { Selector },
};
</script>
<style scoped>
.container-perfil {
  height: 100%;
  width: 50%;
}
.mainContainer {
  margin: auto;
}
@media (orientation: Portrait) {
  .container-perfil {
    width: 90%;
  }
}
.selector {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-around;
}

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