<template>
  <div class="perfil">
    <div class="carrusel">
      <div class="arrow">
        <img class="img-arrow" src="@/assets/arrow.png" />
      </div>
      <div class="container-image">
        <img class="img-carrusel" src="@/assets/skins/azul.png" />
      </div>
      <div class="container-image carrusel-selected">
        <img class="img-carrusel" src="@/assets/skins/azul.png" />
      </div>
      <div class="container-image last">
        <img class="img-carrusel" src="@/assets/skins/azul.png" />
      </div>
      <div class="arrow">
        <img class="img-arrow" src="@/assets/arrow.png" />
      </div>
    </div>
    <div class="container-selected">
      <img class="img-selected" src="@/assets/skins/verde.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.perfil {
  border: 1px, solid, black;
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
@media (min-width:900px) {
.img-arrow{
  width: 70%;
}

}
.arrow:last-child {
  transform: rotate(180deg);
}
.carrusel {
  border: 1px, solid, black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  height: 100%;
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
  width: 100%;
  min-width: 30px;
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
  width: 100%;
  padding: 10%;
  overflow: hidden;
}
</style>
