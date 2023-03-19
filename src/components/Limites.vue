<template>
  <p class="title">{{ titulo }}</p>

  <div class="divBackground">
    <div class="insideDiv">
      <p class="maxStats">{{ rango }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    titulo: String,
    rango: String
  },
};
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

.maxStats {
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
}

@media screen and (min-width: 601px){
   .title{
    font-size: 15px;
    margin-top: 15px;
   } 
}

@media screen and (max-width: 600px){
   .title{
    font-size: 12px;
    margin-top: 15px;
   }
}

</style>