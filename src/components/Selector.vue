<template>
  <div class="perfil">
    <div class="carrusel">
      <div class="arrow">
        <img class="img-arrow" v-on:click="changeLeft" src="@/assets/arrow.png" />
      </div>
      <div class="container-image">
        <img class="img-carrusel" :src="require(`@/assets/skins/trainer-${left}.png`)" />
      </div>
      <div class="container-image carrusel-selected">
        <img class="img-carrusel" :src="require(`@/assets/skins/trainer-${middle}.png`)" />
      </div>
      <div class="container-image last">
        <img class="img-carrusel" :src="require(`@/assets/skins/trainer-${right}.png`)" />
      </div>
      <div class="arrow">
        <img class="img-arrow"  v-on:click="changeRight" src="@/assets/arrow.png" />
      </div>
    </div>
    <div class="container-selected">
      <img class="img-selected" :src="require(`@/assets/skins/trainer-${selected}.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Selector",
  data() {
    return {
      selected: 2,
      left : 1,
      middle : 2,
      right : 3,
      selectedImage: "@/assets/skins/verde.png",
    };
  },
  methods: {
    changeLeft() {
      debugger;
      this.left = this.anterior(this.left);
      this.middle = this.anterior(this.middle);
      this.right = this.anterior(this.right);
      this.selected = this.middle;
    },
    changeRight() {
      this.left = this.siguiente(this.left);
      this.middle = this.siguiente(this.middle);
      this.right = this.siguiente(this.right);
      this.selected = this.middle;
    },
    anterior(value) {
      value = value - 1
      if(value == 0){
        value = 30
      }
      return value
    },
    siguiente(value) {
      value = value + 1
      if(value == 31){
        value = 1
      }
      return value
    },
  },
};
</script>

<style scoped>
.perfil {
  border: 1px, solid, black;
  margin-left: 0px !important;
  margin-right: 0px !important; 
}
row {
  height: 10%;
}
.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
.img-arrow {
  width: 50%;
  cursor: pointer;
}
@media (min-width: 900px) {
  .img-arrow {
    width: 70%;
  }
}
@media (max-width: 450px){
  .img-arrow {
    width: 50% !important;
  }
  .container-image{
    width: 120% !important;
  }
}
@media (max-width: 400px){
  .img-arrow {
    width: 50% !important;
  }
  .container-image{
    width: 150% !important;
  }
}
.arrow:last-child {
  transform: rotate(180deg);
}
.carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.carrusel-selected {
  border: 3px solid;
  border-radius: 20px;
  border-color: #454545;
}
.container-image {
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2bdbd;
  margin-right: 5%;
  border-radius: 15px;
}
.last {
  margin-right: 0%;
}
.img-carrusel {
  margin: 0 10px;
  height: 70%;
  padding: 10%;
  width: 70%;
}
.container-selected {
  height: fit-content;
  border: 20px solid #d4d4d4;
  border-radius: 20px;
  text-align: center;
  margin: 20%;
  margin-top: 15%;
  background-color: #d4d4d4;
  outline: 15px solid #888686;
  -webkit-box-shadow: 0 0 0 8px #888686;
}
.img-selected {
  height: 30%;
  width: 90%;
  padding: 10%;
  overflow: hidden;
}
</style>
