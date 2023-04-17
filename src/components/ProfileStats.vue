<template>
  <div class="stats-container">
    <div class="mb-2 d-flex justify-content-between">
      <span class="text-container"> Combates Ganados: </span>
      <span class="text-container"> 99 </span>
    </div>
    <div class="mb-2 d-flex justify-content-between">
      <span class="text-container"> Combates Perdidos: </span>
      <span class="text-container"> 99 </span>
    </div>
    <div class=" mb-2 d-flex justify-content-between">
      <span class="text-container"> Días restantes jornada: </span>
      <span class="text-container"> 99 </span>
    </div>
    <div class="d-flex justify-content-between">
      <span class="text-container"> Días restantes del torneo: </span>
      <span class="text-container"> 99 </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.text-container {
  border: 1px solid black;
  border-radius: 15px;
  background-color: #f0f0f0;
  padding: 1%;
}
.stats-container {
  border: 1px solid;
  border-color: grey;
  border-radius: 15px;
  background-color: #d9d9d9;
  padding: 4%;
}
@media (orientation: Portrait) {
  .text-container {
    font-size: 0.60rem;
  }
}
</style>
