<template>
  <div id="root" v-if="!isMondayMorning  && tournamentHasStarted">
    <img
      class="img-background"
      src="@/assets/pokeball_fondo.svg"
      draggable="false"
    />
    <div v-if="combatesCargados" id="combate" class="pt-2 container">
      <div>
        <h3>COMBATES PENDIENTES</h3>
        <div class="conjunto-combates">
          <div class="mt-4"></div>
          <div v-if="!hasPendingMatches()">NO HAY COMBATES PENDIENTES</div>          
          <div v-for="(myMatch, index) in myMatches" :key="index" v-show="!(myMatch.player_1_finished == 1 && myMatch.player_2_finished == 1)" class="border-single-match">
            <div class="single-match container-fluid">
              <div class="row d-flex align-items-center" v-if="!hasMarkedResult(myMatch) && (!confirmResults[index] && !confirmedResults[index])">
                <div :style="{ 'font-size': myMatch.player_1_username.length > 10 ? '0.60em' : '' }" :id="'player-1-' + index" class="col-lg-5 trainer-select" v-on:click="confirmResults[index] = !confirmResults[index]; obtainPlayerName(index, myMatch.player_1_username);">
                  <img class="mt-1 mb-1 trainerImage" :src="require(`@/assets/skins/${myMatch.player_1_profile_pic}.png`)" draggable="false"/>
                  {{ myMatch.player_1_username }}
                </div>
                <div :style="{ 'font-size': myMatch.player_2_username.length > 10 ? '0.60em' : '' }" :id="'player-2-' + index" class="col-lg-5 trainer-select" v-on:click="confirmResults[index] = !confirmResults[index]; obtainPlayerName(index, myMatch.player_2_username);">
                  {{ myMatch.player_2_username }}
                  <img class="mt-1 mb-1 trainerImage" :src="require(`@/assets/skins/${myMatch.player_2_profile_pic}.png`)" draggable="false"/>
                </div>
                <div class="col-lg-2 handicap">
                  <div class="handicap-div">
                    <span v-if="myMatch.diferencia < minHandicap"> Sin handicap </span>
                    <span v-else> Handicap de +{{ myMatch.diferencia }} </span>
                    
                    <v-tooltip
                      v-if="myMatch.diferencia >= minHandicap" 
                      activator="parent"
                      location="bottom"
                    ><span v-html="getHandicap(myMatch.diferencia)"></span> 
                    </v-tooltip>
                  </div>
                </div>
              </div>

              <div class="row d-flex justify-content-center align-items-center" v-else-if="confirmResults[index] && !confirmedResults[index]">
                <div v-on:click="confirmResults[index] = !confirmResults[index]" class="col-lg-2 trainer-select confirming-result confirm-no d-flex justify-content-center align-items-center">
                  No
                </div>
                <div id="confirm-message" class="col-lg-8 trainer-select confirming-result d-flex justify-content-center align-items-center">
                  ¿ {{ nombrePlayerGanador }} ha ganado ?
                </div>
                <div class="col-lg-2 trainer-select confirming-result confirm-yes d-flex justify-content-center align-items-center" v-on:click="confirmedResults[index] = !confirmedResults[index]; markResult(myMatch); ">
                  Si
                </div>
              </div>

              <div class="row d-flex justify-content-center align-items-center border border-dark" v-if="hasMarkedResult(myMatch) && !(myMatch.player_1_finished == 1 && myMatch.player_2_finished == 1)">
                <div :class="myMatch.player_1_username === myMatch.result_username || myMatch.player_1_username === nombrePlayerGanador ? 'col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center winner-text' : 'col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center loser-text'">
                  <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />&nbsp;{{ myMatch.player_1_username }}
                </div>
                <div class="col-lg-1 waiting-confirmation confirming-result d-flex justify-content-center align-items-center">
                  VS
                </div>
                <div :class="myMatch.player_2_username === myMatch.result_username || myMatch.player_2_username === nombrePlayerGanador ? 'col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center winner-text' : 'col-lg-4 waiting-confirmation confirming-result d-flex justify-content-center align-items-center loser-text'">
                  {{ myMatch.player_2_username }}&nbsp;<img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" draggable="false" />
                </div>
                <div class="col-lg-3 waiting-confirmation confirming-result d-flex justify-content-center align-items-center" >
                  Esperando ...
                </div>
              </div>
            </div>
          </div>          
          <div class="mb-4"></div>
        </div>
      </div>
      <div class="mt-4">
        <br /><br />
        <h3>COMBATES FINALIZADOS</h3>

        <div class="conjunto-combates">
          <div class="mt-4"></div>
          <div v-if="!hasEndedMatches()">NO HAY COMBATES FINALIZADOS</div>
          <div v-for="(myMatch, index) in myMatches" :key="index" v-show="(myMatch.player_1_finished == 1 && myMatch.player_2_finished == 1)" class="border-single-match">
            <div class="single-match container-fluid">
              <div :class="myUser.username === myMatch.result_username ? 'trainer-select-finished winner-result' : 'trainer-select-finished loser-result'">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-4">
                    <img
                      class="mt-1 mb-1 trainerImage"
                      src="@/assets/trainerPixel.png"
                      draggable="false"
                    />
                    {{myMatch.player_1_username}}
                  </div>
                  <div class="col-lg-1">VS</div>
                  <div class="col-lg-4">
                    <img
                      class="mt-1 mb-1 trainerImage"
                      src="@/assets/trainerPixel.png"
                      draggable="false"
                    />
                    {{myMatch.player_2_username}}
                  </div>
                  <div id="winner" class="col-lg-3">
                    <h3 v-if="myMatch.player_1_id == myMatch.result"><b>GANA <br>{{myMatch.player_1_username}}</b></h3>
                    <h3 v-else-if="myMatch.player_2_id == myMatch.result"><b>GANA <br>{{myMatch.player_2_username}}</b></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4"></div>
        </div>
      </div>
      <br /><br />
    </div>
  </div>
  <div v-else class="text-center">
    <Contador :tiempoSiguientesCombates="msUntilMonday" :textoMensaje="textoContador" />
  </div>
</template>

<script>
import { getMyMatches } from "@/api/combate";
import { postMarkResultMyMatches } from "@/api/combate";
import { getMyselfProfile } from "@/api/shared";
import { getHandicap, minHandicap, horarios_jornada } from "@/helpers/normasHelper.js";
import { VTooltip } from 'vuetify/lib/components/VTooltip/VTooltip'
import Contador from '@/components/Contador.vue';

export default {
  components: {
    VTooltip,
    Contador
  },
  data() {
    return {
      confirmResults: [],
      confirmedResults: [],
      myMatches: "",
      myMatchesUpdated: "",           
      nombrePlayerGanador: '',
      myUser: '',
      combatesCargados: false,   
      minHandicap : minHandicap,
      today: new Date(),
    };
  },
  methods: {
    getHandicap,
    async fillMyMatches() {
      const accessToken = localStorage.getItem("access_token");
      let myMatches = await getMyMatches(accessToken);
      this.myMatches = myMatches.data;     
      this.combatesCargados = true; 
    },

    async fillMyMatchesUpdated() {
      const accessToken = localStorage.getItem("access_token");
      let myMatches = await getMyMatches(accessToken);      
      this.myMatchesUpdated = myMatches.data;
      this.combatesCargados = true;  
    },

    async fillMyUser(){
      const accessToken = localStorage.getItem("access_token");
      let myself = await getMyselfProfile(accessToken);
      this.myUser = myself.data;
    },

    async markResult(myMatch) {
      const accessToken = localStorage.getItem("access_token");
      await postMarkResultMyMatches(accessToken, myMatch.player_1_username, myMatch.player_2_username, this.nombrePlayerGanador);
      await this.fillMyMatchesUpdated();

      //si el otro usuario está esperando, recargamos la página del logeado
      if((this.myUser.username == myMatch.player_1_username && (myMatch.player_1_finished == 0 && myMatch.player_2_finished == 1)) || 
         (this.myUser.username == myMatch.player_2_username && (myMatch.player_2_finished == 0 && myMatch.player_1_finished == 1))){
        window.location.reload();
      }      
    },

    hasPendingMatches(){
      return _.some(this.myMatches, (match) => {
        return _.isEqual(match.player_1_finished, 0) || _.isEqual(match.player_2_finished, 0);
      });
    },

    hasEndedMatches(){
      return _.some(this.myMatches, (match) => {
        return _.isEqual(match.player_1_finished, 1) && _.isEqual(match.player_2_finished, 1);
      });
    },

    obtainPlayerName(index, player_username) {
      this.nombrePlayerGanador = player_username;      
      this.confirmResults[index] = true;
      this.confirmedResults[index] = false;
    },

    hasMarkedResult(myMatch){      
            
      //estos 2 ifs es por si alguien ya ha asignado ganador
      if(this.myUser.username == myMatch.player_1_username && (myMatch.player_1_finished == 1)){
        return true;        
      }
      else if(this.myUser.username == myMatch.player_2_username && (myMatch.player_2_finished == 1)){
        return true;
      }      
      
      //este for es para comprobar el contenido del endpoint /myself/matches con los datos ya cambiados. (esto lo hace cuando es la primera de las 2 personas a asignar ganador)
      for(let myMatchUpdated of this.myMatchesUpdated){
        if(myMatchUpdated.player_1_username == myMatch.player_1_username && myMatchUpdated.player_2_username == myMatch.player_2_username){
          if((myMatch.player_1_username == this.myUser.username && myMatchUpdated.player_1_finished == 1) || 
            (myMatch.player_2_username == this.myUser.username && myMatchUpdated.player_2_finished == 1)){              
              return true;
          }
        }
      }
      
      return false;
    },

  },
  mounted() {
    this.fillMyMatches();
    this.fillMyUser();
  },
  computed: {
      isMondayMorning() {
          return this.today.getDay() === 1 && this.today.getHours() < 18
      },
      tournamentHasStarted() {
          return this.today >= horarios_jornada[0][0]
      },
      msUntilMonday() {
          // Si el torneo aún no ha empezado
          if(!this.tournamentHasStarted){
              this.textoContador = `La liga empezará el ${horarios_jornada[0][0].getDate()} de ${horarios_jornada[0][0].toLocaleString('default', { month: 'long' })}`;
              return horarios_jornada[0][0].getTime() - this.today.getTime();
          }
          // Una vez empezado, entra si es lunes por la mañana
          if(this.isMondayMorning){
              const now = new Date();
              const msInDay = 86400000;
              const msUntilMonday = (8 - now.getDay()) % 7 * msInDay + (18 - now.getHours()) * 3600000 - now.getMinutes() * 60000 - now.getSeconds() * 1000 - now.getMilliseconds();
              this.textoContador = "Los nuevos combates apareceran el Lunes a las 18:00";
              return msUntilMonday;
          }
      }
  },
};
</script>

<style scoped>
.root {
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#combate {
  text-align: center;
}

.conjunto-combates {
  border: solid #000000;
  border-width: 1px;
  border-radius: 15px;
  background-color: #d0d0d0;
}

.border-single-match {
  border: solid black;
  border-radius: 15px;
  margin: 15px;
  border-width: 1px;
}

.single-match {
  border: solid #aaaaaa;
  border-radius: 15px;
  border-width: 10px;
  background-color: #aaaaaa;
}

.trainer-select {
  border: solid black;
  border-width: 1px;
  background-color: #d9d9d9;
}

.waiting-confirmation {
  background-color: #d9d9d9;
}

.trainer-select-finished {
  border: solid black;
  border-width: 1px;
  background-color: #d9d9d9;
  border-radius: 7px;
}

.trainer-select:hover:not(.confirming-result) {
  background-color: #bdcab7;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.trainer-select-red {
  background-color: #bdcab7;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.handicap-div {
  border: solid black;
  border-width: 1px;
  border-radius: 15px;
  background-color: #d9d9d9;
  font-size: 12px;
  height: 96px;
  margin: auto;
  padding-top: 40px;
}

@media screen and (max-width: 992px) {
  .handicap-div {
    height: 30px;
    padding-top: 6px;
    margin-top: 10px;
  }

  #winner {
    margin-bottom: 20px;
  }

  .img-background {
    display: none;
  }
}

@media screen and (min-width: 993px) {
  .img-background {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-left: 2%;
    margin-top: 2%;
    width: 90%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.05;
    vertical-align: middle;
  }
}

.trainerImage {
  padding-top: 30px;
  width: 40px;
  padding-bottom: 30px;
}

.winner-result {
  background-color: #bdcab7;
}

.loser-result {
  background-color: #c7a1a1;
}

.confirming-result {
  height: 115px;
}

.confirm-no {
  background-color: #c7a1a1;
}

.confirm-no:hover {
  background-color: #c39090;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.confirm-yes {
  background-color: #bdcab7;
}

.confirm-yes:hover {
  background-color: #a2c095;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.winner-text {
  color: #3c7822;
}

.loser-text {
  color: rgb(145, 24, 24);
}
</style>