<template>
  <div>
    <p class="title text-center">NUEVAS RUTAS</p>

    <div class="divBackground">
      <div class="insideDiv">
        <div class="row divRutas">          
            <p class="col-sm-6 nombreRuta">- Pueblo Primavera</p>
            <p class="col-sm-6 nombreRuta">- Cueva Oscura</p>
            <p class="col-sm-6 nombreRuta">- Ruta 29</p>
            <p class="col-sm-6 nombreRuta">- Ruta 31</p>
            <p class="col-sm-6 nombreRuta">- Ciudad Cerezo</p>
            <p class="col-sm-6 nombreRuta">- Ciudad Malva</p>
            <p class="col-sm-6 nombreRuta">- Ruta 30</p>    
            <p class="col-sm-6 nombreRuta">- Ruta 46</p>          
        </div>
      </div>
    </div>
  </div>
</template>
  
 <script>
export default {};
</script>
  
<style scoped>
.divBackground {
  background-color: #c2bdbd;
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

.title {
  font-size: 12px;
  margin-top: 15px;
}

.divRutas{
    padding: 2%;
    
}

.nombreRuta{    
    margin-bottom: 0;
    font-size: 13px;
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
}
</style>