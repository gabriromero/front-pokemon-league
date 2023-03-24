<template>
  <div class="perfil">
    <div class="row">
      <div class="carrusel">
        <div class="container-image">
          <img class="img-carrusel" src="@/assets/skins/azul.png" />
        </div>
        <div class="container-image carrusel-selected">
          <img class="img-carrusel" src="@/assets/skins/azul.png" />
        </div>
        <div class="container-image">
          <img class="img-carrusel" src="@/assets/skins/azul.png" />
        </div>
      </div>
    </div>
      <div class="container-selected">
        a
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
.carrusel {
  border: 1px, solid, black;
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
.carrusel-selected {
  border: 3px solid;
  border-radius: 20px;
  border-color: #454545;
}
.container-image {
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2bdbd;
  margin-right: 5%;
  border-radius: 15px;
}
.container-image:last-child {
  margin-right: 0%;
}
.img-carrusel {
  margin: 0 10px;
  height: 70%;
  width: 70%;
}
.container-selected {
  
  height: fit-content;
  border: 200px, solid, black;
}
.img-selected {
  height: 10%;
}
</style>
