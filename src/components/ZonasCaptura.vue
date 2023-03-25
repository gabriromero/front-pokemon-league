<template>
  <div>
    <p class="title text-center">ZONAS DE CAPTURA</p>
    
    <div class="divBackground">
        <div class="insideDiv">
            <img id="map" class="img-fluid p-3 w-100" src="@/assets/mapa.png" alt="">
        </div>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.divBackground {
  background-color: #C2BDBD;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;  
  margin-bottom: 5%;
  
}

.insideDiv {
  background-color: white;
  border: 2px solid;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin: 5px;
  vertical-align: middle;
}

.title{
    font-size: 12px;
    margin-top: 15px;
}

</style>