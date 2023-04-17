<template>
  <div class="firstBorder">
    <div class="classificationBorder ">
      <div class="totalBorder">
        <table class="table">
          <tbody>
            <tr v-for="(player, index) in playersOrdenados" :key="player.username"
              class="grayBackColor borderClassification">
              <th v-if="player.username != '---' ">
                <img class="trainerImage" :src="require(`@/assets/skins/${player.profile_pic}.png`)" />
              </th>
              <td class="trainerName fontAdaptative">{{ player.username }}</td>
              <th class="medalAlign">
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
  </div>
</template>

<script>
import {getPlayers} from '@/api/home'
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
      let players = await getPlayers()
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

.medalAlign{
  text-align: right;
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
  padding: 1% !important;
}
td {
  padding: 1% !important;
}

.trainerImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 37px;
  height: auto;
}

.trainerMedal {
  width: 30px;
  height: auto;
}

.table {
  margin-bottom: 0px;
}

.firstBorder {
    border: solid;
    border-width: 3px;
    border-radius: 20px;
    border-color: black;
}

.classificationBorder {
    border: solid;
    border-radius: 15px;
    border-width: 15px;
    border-color: #AAAAAA;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    background-color: #AAAAAA;
}

.totalBorder {
    border: solid;
    border-width: 1px;
    border-color: black;
    background-color: #FFFFFF;
    max-height: 400px;
    overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}

@media screen and (max-width: 600px) {
    .fontAdaptative {
        font-size: 12px;
    }
}
</style>