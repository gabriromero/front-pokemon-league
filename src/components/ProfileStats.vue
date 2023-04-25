<template>
  <div class="stats-container">
    <div class="mb-2 d-flex justify-content-between">
      <span class="text-container"> Combates Ganados: </span>
      <span class="text-container num">{{combatesGanados}}</span>
    </div>
    <div class="mb-2 d-flex justify-content-between">
      <span class="text-container"> Combates Perdidos: </span>
      <span class="text-container num">{{combatesJugados-combatesGanados}}</span>
    </div>
    <div class="mb-2 d-flex justify-content-between">
      <span class="text-container"> Días restantes jornada: </span>
      <span class="text-container num">{{diasRestantesJornada}} </span>
    </div>
    <div class="d-flex justify-content-between">
      <span class="text-container"> Días restantes del torneo: </span>
      <span class="text-container num"> {{diasRestantesTorneo}} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    combatesGanados: Number,
    combatesJugados: Number,
    diasRestantesJornada: Number,
    diasRestantesTorneo: Number
  },
};
</script>


<style scoped>
.text-container {
  border: 1px solid black;
  border-radius: 15px;
  background-color: #f0f0f0;
  padding: 0.5%;
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
  padding-inline-end: 10%;
  padding-inline-start: 3%;
  display: flex;
  align-items: center;
}
.stats-container {
  border: 1px solid;
  border-color: grey;
  border-radius: 15px;
  background-color: #d9d9d9;
  padding: 2%;
}
.num {
  padding-inline: 2%;
}
@media (orientation: Portrait) {
  .text-container {
    font-size: 1rem;
  }
  @media (max-width: 730px) {
    .text-container {
    font-size: 0.7rem !important;
  }
  }
  @media (max-width: 570px) {
    .text-container {
    font-size: 0.5rem !important;
  }
  }
}
</style>
