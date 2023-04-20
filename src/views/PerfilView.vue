<template>
  <div class="root">
    <div class="mainCenter">
      <p class="tituloFicha pl-title text-center border border-2 border-dark">
        FICHA ENTRENADOR
      </p>
      <p class="nombreFicha pl-title text-center border border-2 border-dark">
        {{ player.username }}
      </p>
    </div>
    <div class="principal">
      <div class="row selector_medallas">
        <div class="medallas-perfil izquierda col-2">
          <Medallas :ladoMedalla="'L'" />
        </div>
        <div class="selector-container col-8">
          <Selector />
        </div>
        <div class="medallas-perfil derecha col-2">
          <Medallas :ladoMedalla="'R'" />
        </div>
      </div>
      <div class="estadisticas-div">
        <ProfileStats
          :combatesGanados="`${player.matches_won}`"
          :combatesJugados="`${player.matches_played}`"
          :diasRestantesJornada="`${diasRestantesJornada}`"
          :diasRestantesTorneo="`${diasRestantesTorneo}`"
        />
      </div>
      <div class="medallas-movil">
        <Medallas_Portrait />
      </div>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
import Medallas from "@/components/Medallas.vue";
import Medallas_Portrait from "@/components/Medallas_Portrait.vue";
import ProfileStats from "@/components/ProfileStats.vue";
import { getMyselfProfile } from "@/api/shared";
import { getJornada } from "@/helpers/normasHelper";
import { horarios_jornada } from "@/helpers/normasHelper";
export default {
  components: { Selector, Medallas, Medallas_Portrait, ProfileStats },
  data() {
    return {
      player: "",
      diasRestantesJornada: "",
      diasRestantesTorneo: "",
    };
  },
  methods: {
    async getPlayer() {
      const accessToken = localStorage.getItem("access_token");
      let player = await getMyselfProfile(accessToken);
      this.player = player.data;
    },
    async getRestantesJornada() {
      let hoy = new Date();
      let numJornada = await getJornada();
      let fechasJornada = horarios_jornada[numJornada - 1][1];
      let diasRestantesJornada = fechasJornada - hoy;
      let diferenciaDias = Math.floor(
        diasRestantesJornada / (1000 * 60 * 60 * 24)
      );
      this.diasRestantesJornada = diferenciaDias + 1;
    },
    async getRestantesTorneo() {
      let hoy = new Date();
      let fechasUltimaJornada = horarios_jornada[horarios_jornada.length - 1];
      let ultimaFechaJornada =
        fechasUltimaJornada[fechasUltimaJornada.length - 1];
      let diferenciaFechas = ultimaFechaJornada - hoy;
      let diferenciaDias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
      this.diasRestantesTorneo = diferenciaDias;
    },
  },
  mounted() {
    this.getPlayer();
    this.getRestantesJornada();
    this.getRestantesTorneo();
  },
};
</script>
<style scoped>
.selector_medallas {
  display: flex;
}
.estadisticas-div {
  display: block;
  justify-content: center;
  margin-top: 3%;
}
.medallas-movil {
  display: none;
}
.izquierda {
  margin-left: 0;
}
.derecha {
  margin-right: 0;
}
.principal {
  display: block;
  justify-content: center;
  margin-right: 25%;
  margin-left: 25%;
  margin-bottom: 2%;
}
.izquierda {
  position: relative;
}
.derecha {
  position: relative;
}
@media (orientation: Portrait) {
  .nombreFicha {
    font-size: 2.5vw !important;
  }
  .root {
    margin-top: 0px !important;
  }
  .tituloFicha {
    font-size: 3.5vw !important;
  }
  .selector-container {
    width: 100%;
  }
  .medallas-perfil {
    display: none;
  }
  .medallas-movil {
    display: block;
    justify-content: center;
    margin-top: 3%;
  }
  .principal {
    margin-right: 5%;
    margin-left: 5%;
  }
  @media (max-width: 400px) {
    .nombreFicha {
      font-size: 3.5vw !important;
    }
  }
}
.selector {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.perfil {
  border: 1px solid;
  border-color: grey;
  border-radius: 15px;
  background-color: #d9d9d9;
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
}
.tituloFicha {
  border-radius: 10px;
  width: 120%;
  margin: 0 auto;
  padding: 5px;
  font-weight: bold;
  font-size: 1.5vw;
}
.nombreFicha {
  border-radius: 10px;
  margin: 0 auto;
  width: fit-content;
  margin-top: 10px;
  font-size: 1.3vw;
  padding-inline: 10%;
}
.mainCenter {
  margin: auto;
  padding: 10px;
  width: fit-content;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  color: black;
}
</style>