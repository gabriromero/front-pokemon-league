<template>
    <div class="firstBorder">
        <div class="matchBorder">
            <div class="border border-dark">

                <div class="mt-2"></div>
                <div class="singleMatchPadding">
                    <div class="d-flex justify-content-between align-items-baseline singleMatch">
                        <div>
                            <img class="trainerImage" src="@/assets/trainerPixel.png"/> Avdalian
                        </div>
                        <div>
                            VS
                        </div>
                        <div>
                            Avdalian <img class="trainerImage" src="@/assets/trainerPixel.png"/>
                        </div>
                    </div>
                </div>

                <div class="singleMatchPadding">
                    <div class="d-flex justify-content-between align-items-baseline singleMatch">
                        <div>
                            <img class="trainerImage" src="@/assets/trainerPixel.png"/> Avdalian
                        </div>
                        <div>
                            VS
                        </div>
                        <div>
                            Avdalian <img class="trainerImage" src="@/assets/trainerPixel.png"/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.firstBorder{
    border: solid;
    border-width: 2px;
    border-radius: 17px;
    border-color: black;
}

.trainerImage{
  width: 30px;
}

.singleMatch{
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

.matchBorder{
    border: solid;
    border-radius: 15px;
    border-width: 15px;
    border-color: #AAAAAA;
    -moz-border-radius: 15px; 
    -webkit-border-radius: 15px; 
}
</style>