<template>
  <div class="backgroundClassification">
    <div class="table-responsive tablaClassification">
      <table class="table">
        <tbody>
          <tr class="grayBackColor borderClassification">
            <th>
              <img class="trainerImage" src="@/assets/trainerPixel.png"/>
            </th>
            <td class="trainerName">Erdeiby</td>
            <th>
              <img class="trainerMedal" src="@/assets/goldMedal.png"/>
            </th>
            <td class="trainerScore">3</td>
          </tr>
          <tr class="whiteBackColor borderClassification">
            <th>
              <img class="trainerImage" src="@/assets/trainerPixel.png"/>
            </th>
            <td class="trainerName">Guzzom</td>
            <th>
              <img class="trainerMedal" src="@/assets/silverMedal.png"/>
            </th>
            <td class="trainerScore">1</td>
          </tr>
          <tr class="grayBackColor borderClassification">
            <th>
              <img class="trainerImage" src="@/assets/trainerPixel.png"/>
            </th>
            <td class="trainerName">Avdalian</td>
            <th>
              <img class="trainerMedal" src="@/assets/bronzeMedal.png"/>
            </th>
            <td class="trainerScore">1</td>
          </tr>
          
          
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.trainerName {
  vertical-align: middle;
  font-size: 1.3em;
}

.trainerScore{
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
}

th{  
  width: 14%;
}

.trainerImage{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: auto;
}

.trainerMedal{
  width: 80%;
  height: auto;  
}

.table{
  margin-bottom: 0px;
}
</style>