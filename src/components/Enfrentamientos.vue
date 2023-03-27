<template>
    <div class="firstBorder">
        <div class="matchBorder ">
            <div class="totalBorder">
                <div class="mt-2"></div>
                <div class="singleMatchPadding" v-for="(match) in matches" :key="match.result">
                    <div class="d-flex align-items-baseline singleMatch fontAdaptative">
                        <div class="w-50" :class="match.result !== '' ? (match.player_1_username === match.result ? 'winnerColor' : 'loserColor') : ''">
                            <img class="mt-1 mb-1 trainerImage" src="@/assets/trainerPixel.png" /> {{ match.player_1_username }}
                        </div>
                        <div class="w-auto">
                            VS
                        </div>
                        <div class="pe-1 w-50 text-end" :class="match.result !== '' ? (match.player_2_username === match.result ? 'winnerColor' : 'loserColor') : ''">
                            {{ match.player_2_username}} <img class="trainerImage" src="@/assets/trainerPixel.png" />
                        </div>
                    </div>
                </div>
                <div class="mb-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {getMatches} from '@/api/home'
export default {
    data() {
        return {
            numSeccion: 1,
            matches: ''
        }
    },
    methods: {
        async fillMatches() {
            let matches = await getMatches()
            let filteredMatches = matches.data.filter(match => match.jornada === 1)
            this.matches = filteredMatches
        }

    },
    mounted() {
        this.fillMatches()
    }
}
</script>

<style scoped>
.firstBorder {
    border: solid;
    border-width: 3px;
    border-radius: 20px;
    border-color: black;
}

.trainerImage {
    width: 30px;
}

.singleMatch {
    border: solid;
    border-radius: 10px;
    border-width: 1px;
    border-color: black;
    background-color: #F0F0F0;
    padding-left: 5px;
}

.singleMatchPadding {
    padding: 5px;
}

.matchBorder {
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
    border-width: 2px;
    border-color: black;
    border-radius: 15px;
    background-color: #FFFFFF;
    max-height: 400px;
    overflow-y: auto;
}

.totalBorder::-webkit-scrollbar {
    display: none;
}

.winnerColor{
    color: #698b5b
}

.loserColor{
    color: #af6666
}

@media screen and (max-width: 600px) {
    .fontAdaptative {
        font-size: 10px;
    }
}
</style>