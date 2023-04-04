<template>
  <div>
    <p class="title text-center">NUEVAS RUTAS</p>

    <div class="divBackground">
      <div class="insideDiv">
        <div class="divRutas">
          <table style="width: 100%; ">
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td class="nombreRuta">Pueblo Primavera</td>
              <td class="nombreRuta">Ruta 29</td>
            </tr>
            <tr>
              <td class="nombreRuta">Ciudad Cerezo</td>
              <td class="nombreRuta">Ruta 30</td>
            </tr>
            <tr>
              <td class="nombreRuta">Ruta 46</td>            
              <td class="nombreRuta">Cueva Oscura</td>
            </tr>
            <tr>
              <td class="nombreRuta">Ruta 31</td>
              <td class="nombreRuta">Ciudad Malva</td>              
            </tr>
          </table>
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

.divRutas {
  padding: 2%;
}

.nombreRuta {
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

@media only screen and (max-width: 480px){
  .divRutas table, 
  .divRutas thead, 
  .divRutas tbody, 
  .divRutas th, 
  .divRutas td, 
  .divRutas tr {
    display: block;    
  }
  .divRutas tbody td {
    text-align: left;    
  }
  

  .divRutas tbody td:before {
    /*content: attr(data-th);*/
    font-weight: bold;
    display: inline-block;
    width: 80px;
    margin-right: 5px;
  }
}

@media only screen and (min-width: 990px) and (max-width: 1200px) {
  .divRutas table, 
  .divRutas thead, 
  .divRutas tbody, 
  .divRutas th, 
  .divRutas td, 
  .divRutas tr {
    display: block;    
  }
  .divRutas tbody td {
    text-align: left;    
  }
  .divRutas tbody td:before {
    /*content: attr(data-th);*/
    font-weight: bold;
    display: inline-block;
    width: 80px;
    margin-right: 5px;
  }
}
</style>