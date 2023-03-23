<template>
  <p class="title">STATS POKÉMON</p>

  <div class="row">
    <div class="col-xl-4">
      <div class="imgDiv">
        <img class="imgClass" src="@/assets/gyarados.png" />
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="imgTipos col-sm-6 col-6">
          <img class="pkmTypeImg" src="@/assets/pkmTypes/water.png" />
        </div>
        <div class="imgTipos col-sm-6 col-6">
          <img class="pkmTypeImg" src="@/assets/pkmTypes/flying.png" />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-12">STATS BASE:</div>
        <div class="divStatsBase">
          <div class="divStatsBaseInside">
            <p class="valorStatBase">540</p>
          </div>
        </div>
      </div>
    </div>

    <div class="namePkmDiv col-xl-8 col-12">
      <div class="row">
        <div class="buscadorPkmBackgroundDiv">
          <div class="buscadorPkmInsideDiv">
            <div class="buscadorPkm">
              <Select2
                class="mi-select2"
                @click="changeFont"
                v-model="myValue"
                :options="myOptions"
                :settings="{}"
                :maxOptions="4"
                @change="myChangeEvent($event)"
                @select="mySelectEvent($event)"
              />
              <!--<h4>{{ myValue }}</h4>-->
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="labelPS col-sm-9 col-6">PS</div>
        <div class="statPS col-sm-3 col-6">95</div>
      </div>

      <div class="row">
        <div class="labelAtaque col-sm-9 col-6">ATAQUE</div>
        <div class="statAtaque col-sm-3 col-6">125</div>
      </div>

      <div class="row">
        <div class="labelDefensa col-sm-9 col-6">DEFENSA</div>
        <div class="statDefensa col-sm-3 col-6">79</div>
      </div>

      <div class="row">
        <div class="labelVelocidad col-sm-9 col-6">VELOCIDAD</div>
        <div class="statVelocidad col-sm-3 col-6">81</div>
      </div>

      <div class="row">
        <div class="labelAtEsp col-sm-9 col-6">AT ESP.</div>
        <div class="statAtEsp col-sm-3 col-6">60</div>
      </div>

      <div class="row">
        <div class="labelDefEsp col-sm-9 col-6">DEF ESP.</div>
        <div class="statDefEsp col-sm-3 col-6">100</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import $ from "jquery";
import Select2 from "vue3-select2-component";
export default {
  // declare Select2Component
  components: { Select2 },
  data() {
    return {
      myValue: "",
      myOptions: [
        "op1",
        "op2",
        "op3",
        "op1",
        "op2",
        "op3",
        "op1",
        "op2",
        "op3",
        "op1",
        "op2",
        "op3",
      ],
    };
  },
  methods: {
    myChangeEvent(val) {
    },
    mySelectEvent({ id, text }) {
    },
    changeFont(){
      let options = document.getElementsByClassName('select2-results__option')
      for (let item of options) {
          item.style.fontFamily = 'Pokemon Gb';
          if(item.classList.value.includes('highlighted')){
            item.style.backgroundColor = '#c2bdbd';
          }
      }
    }
  
  },

  mounted() {
    //añadir borde al Select (desde CSS no deja D: ))
    const bordeSelect = document.querySelector(".select2-selection--single");
    bordeSelect.style.border = "2px solid #2c3e50";
    bordeSelect.style.borderRadius = "15px 15px 15px 15px";

  },
};
</script>
  
<style scoped>
.imgDiv {
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: white;
  margin-bottom: 10px;
}

.namePkmDiv {
  margin-bottom: 10px;
}

.pkmTypeImg {
  width: 100%;
  height: 100%;
  filter: grayscale(60%);
}

.imgTipos {
  margin-bottom: 10px;
}

.buscadorPkm {
  width: 100%;
}

.buscadorPkmBackgroundDiv {
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: #c2bdbd;
  width: 97.5%;
  margin-left: 10px;
}

.buscadorPkmInsideDiv {
  margin: 5px 5px 5px 0px;
  width: 100%;
}

.inputPkm,
.inputPkm:focus {
  border: 0 !important;
  outline: none !important;
}

.imgClass {
  width: 100%;
  height: 100%;
  padding: 5% 2% 5% 2%;
}

.labelPS,
.labelAtaque,
.labelDefensa,
.labelVelocidad,
.labelAtEsp,
.labelDefEsp {
  margin-top: 33px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1.4em;
}

.statPS,
.statAtaque,
.statDefensa,
.statVelocidad,
.statAtEsp,
.statDefEsp {
  margin-top: 33px;
  text-align: center;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: white;
  font-size: 1.2em;
}

.divStatsBase {
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  background-color: #c2bdbd;
  margin-left: 10px;
}

.divStatsBaseInside {
  background-color: white;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin: 5px -5px 5px -5px;
  vertical-align: middle;
}

.valorStatBase {
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
}

@media screen and (min-width: 601px) {
  .title {
    font-size: 15px;
    margin-top: 15px;
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 12px;
    margin-top: 15px;
  }

  .labelPS,
  .labelAtaque,
  .labelDefensa,
  .labelVelocidad,
  .labelAtEsp,
  .labelDefEsp {
    font-size: 0.9em;
    padding-left: 0px;
  }

  .divStatsBase {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 991px) {
  .divStatsBase {
    margin-bottom: 15px;
  }
}
</style>