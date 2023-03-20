<template>
  <div id="root">
    <img class="img-background" src="@/assets/pokeball_fondo.svg" draggable="false">
    <div id="combate" class="pt-2 container">
      <div>
        <h3>COMBATES PENDIENTES</h3>
        <div class="conjunto-combates">

          <div class="mt-4"></div>
          <div class="border-single-match">
            <div class="single-match container-fluid">
              <div class="row d-flex align-items-center" v-if="!confirmResult && !confirmedResult">
                <div class="col-lg-5 trainer-select" v-on:click="confirmResult = !confirmResult">
                  <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                </div>
                <div class="col-lg-5 trainer-select " v-on:click="confirmResult = !confirmResult">
                  Guzzom <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />
                </div>
                <div class="col-lg-2 handicap">
                  <div class="handicap-div">
                    Sin handicap
                  </div>
                </div>
              </div>

              <div class="row d-flex justify-content-center align-items-center"
                v-else-if="confirmResult && !confirmedResult">
                <div v-on:click="confirmResult = !confirmResult"
                  class="col-lg-2 trainer-select confirming-result confirm-no d-flex justify-content-center align-items-center">
                  No
                </div>
                <div id="confirm-message"
                  class="col-lg-8 trainer-select confirming-result d-flex justify-content-center align-items-center">
                  ¿ Avdalian ha ganado ?
                </div>
                <div
                  class="col-lg-2 trainer-select confirming-result confirm-yes d-flex justify-content-center align-items-center"
                  v-on:click="confirmedResult = !confirmedResult">
                  Si
                </div>
              </div>

              <div class="row d-flex justify-content-center align-items-center border border-dark" v-else>
                <div
                  class="col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center winner-text">
                  <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />&nbsp;Avdalian
                </div>
                <div
                  class="col-lg-1 waiting-confirmation confirming-result d-flex justify-content-center align-items-center">
                  VS
                </div>
                <div
                  class="col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center loser-text">
                  Avdalian&nbsp;<img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />
                </div>
                <div
                  class="col-lg-3 waiting-confirmation confirming-result d-flex justify-content-center align-items-center">
                  Esperando ...
                </div>
              </div>

            </div>
          </div>

          <div class="mt-4"></div>
          <div class="border-single-match">
            <div class="single-match container-fluid">
              <div class="row d-flex align-items-center">
                <div class="col-lg-5 trainer-select">
                  <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                </div>
                <div class="col-lg-5 trainer-select ">
                  Avdalian <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />
                </div>
                <div class="col-lg-2 handicap">
                  <div class="handicap-div">
                    Sin handicap
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4"></div>
        </div>
      </div>
      <div class="mt-4">

        <br><br>
        <h3>COMBATES FINALIZADOS</h3>

        <div class="conjunto-combates">
          <div class="mt-4"></div>
          <div class="border-single-match">
            <div class="single-match container-fluid">
              <div class="trainer-select-finished loser-result">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-4">
                    <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                  </div>
                  <div class="col-lg-1">
                    VS
                  </div>
                  <div class="col-lg-4">
                    <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                  </div>
                  <div id="winner" class="col-lg-3 ">
                    <h3><b>GANA GUZZOM</b></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4"></div>
          <div class="border-single-match">
            <div class="single-match container-fluid">
              <div class="trainer-select-finished winner-result">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-4">
                    <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                  </div>
                  <div class="col-lg-1">
                    VS
                  </div>
                  <div class="col-lg-4">
                    <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" /> Avdalian
                  </div>
                  <div id="winner" class="col-lg-3 ">
                    <h3><b>GANA GUZZOM</b></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4"></div>
        </div>
      </div>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmResult: false,
      confirmedResult: false
    }
  }
}
</script>

<style scoped>
.root {
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


#combate {
  text-align: center;

}

.conjunto-combates {
  border: solid #000000;
  border-width: 1px;
  border-radius: 15px;
  background-color: #D0D0D0;
}

.border-single-match {
  border: solid black;
  border-radius: 15px;
  margin: 15px;
  border-width: 1px;
}

.single-match {
  border: solid #AAAAAA;
  border-radius: 15px;
  border-width: 10px;
  background-color: #AAAAAA;
}

.trainer-select {
  border: solid black;
  border-width: 1px;
  background-color: #D9D9D9;
}

.waiting-confirmation {
  background-color: #D9D9D9;
}

.trainer-select-finished {
  border: solid black;
  border-width: 1px;
  background-color: #D9D9D9;
  border-radius: 7px;
}

.trainer-select:hover:not(.confirming-result) {
  background-color: #BDCAB7;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.trainer-select-red {
  background-color: #BDCAB7;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.handicap-div {
  border: solid black;
  border-width: 1px;
  border-radius: 15px;
  background-color: #D9D9D9;
  font-size: 12px;
  height: 96px;
  margin: auto;
  padding-top: 40px;
}

@media screen and (max-width: 992px) {
  .handicap-div {
    height: 30px;
    padding-top: 6px;
    margin-top: 10px;
  }

  #winner {
    margin-bottom: 20px;
  }

  .img-background {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.05;
    display: none;
  }
}

@media screen and (min-width: 993px) {
  .img-background {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.05;
  }
}

.trainerImage {
  padding-top: 30px;
  width: 40px;
  padding-bottom: 30px;
}

.winner-result {
  background-color: #BDCAB7;
}

.loser-result {
  background-color: #C7A1A1;
}

.confirming-result {
  height: 115px;
}

.confirm-no {
  background-color: #C7A1A1;
}

.confirm-no:hover {
  background-color: #c39090;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.confirm-yes {
  background-color: #BDCAB7;

}

.confirm-yes:hover {
  background-color: #a2c095;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.winner-text {
  color: #3c7822;
}

.loser-text {
  color: rgb(145, 24, 24);
}</style>