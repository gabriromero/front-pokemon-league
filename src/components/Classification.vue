<template>
  <div class="backgroundClassification">
    <div class="table-responsive tablaClassification">
      <table class="table">
        <tbody>
          <tr v-for="(player, index) in playersOrdenados" :key="player.username" class="grayBackColor borderClassification">
            <th v-if="player.username != '---' ">
              <img class="trainerImage" :src="require(`@/assets/${player.profile_pic}.png`)" />
            </th>
            <td class="trainerName">{{ player.username }}</td>
            <th>
              <img v-if="index == 0" class="trainerMedal" src="@/assets/goldMedal.png" />
              <img v-else-if="index == 1" class="trainerMedal" src="@/assets/silverMedal.png" />
              <img v-else-if="index == 2" class="trainerMedal" src="@/assets/bronzeMedal.png" />             
            </th>
            <td class="trainerScore">{{ player.matches_won }}</td>
          </tr>          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {getFakePlayers} from '@/api/home'
import { computed } from 'vue'
export default {

  data() {
    return{      
      players: [
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        },
        {
          "matches_won": 0,
          "username": "---"
        }
      ]
    }
  },
  methods: {
    async fillPlayers() {
      let players = await getFakePlayers()
      this.players = players.data
    }
  },
  mounted() {
    this.fillPlayers()
  },

  computed:{
    playersOrdenados: function(){
      return _.orderBy(this.players, ['matches_won'], ['desc'])
    }
  }
}

</script>

<style scoped>
.trainerName {
  vertical-align: middle;
  font-size: 1.3em;
}

.trainerScore {
  font-size: 1.5em;
  vertical-align: middle;
  text-align: center;
}

.grayBackColor {
  background-color: #d4d4d4;
}

.whiteBackColor {
  background-color: #ffffff;
}

.borderClassification {
  border: 2px solid;
  border-color: black;
}

.backgroundClassification {
  background-color: #aaaaaa;
  border-radius: 15px 15px 15px 15px;
  height: auto;
  margin-bottom: 5%;
  border: 2px solid;
  border-color: black;
  
}

.tablaClassification {
  padding: 3%;
  max-height: 430px !important;  
  overflow-y: auto;
}

.tablaClassification::-webkit-scrollbar{
  display: none;
}

th {
  width: 14%;
}

.trainerImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: auto;
}

.trainerMedal {
  width: 80%;
  height: auto;
}

.table {
  margin-bottom: 0px;
}
</style>