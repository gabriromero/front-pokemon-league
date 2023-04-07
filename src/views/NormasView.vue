<template>
  <div id="normas">
    <h1>Normas</h1>
    <div class="mt-5">
      <div class="main">
        <div class="row mt-3 ">
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 1">Mercado negro</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 2">Límites y niveles</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 3">Cambios y crianza</button>
        </div>

        <div class="row">
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 4">Capturas de pantalla</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 5">Handicaps</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 6">Objetos y capturas</button>
        </div>

        <div class="border-example framed mt-4 mb-5 padding-sides" style="background-color: #9eacad;">
          <div class="small" v-if="numSeccion == 1">
            <h4><b><u>Mercado negro</u></b></h4>
            <div class="mt-3">
              <p class="mb-4">El uso del Mercado Negro solo será permitido cuando se 
              utilice para ahorrar tiempo y dinero.</p>
              <h6><b><u>Pokémon</u></b></h6>
              <p>Queda totalmente prohibido la compra de absolutamente cualquier Pokémon.</p>
              <h6><b><u>Objetos</u></b></h6>
              <p><i>Está prohibida la compra de cualquier objeto a excepción de:</i></p>
              <p>1. Carameloraros</p>
              <p>2. Vitaminas</p>
              <p>3. Bayas reductoras de EVs</p>
              <p>4. Campana alivio</p>
              <p>5. Escamas corazón</p>
              <p>6. Todos los objetos que estén a la venta en Tienda Pokémon o Centro Comercial disponibles en las rutas determinadas en el mapa.</p>
              <p>7. <u>En la última jornada</u> se pueden comprar objetos equipables competitivos sin restricción.</p>
            </div>
          </div>

          <div v-if="numSeccion == 2">

            <h4 ><u>Niveles por Jornada</u></h4>

            <div class="mt-3 small">
              <p>Por cada Jornada, se establecerá una cantidad y niveles del equipo Pokémon.</p>
              <div class="row text-center">
                  <div class="col-3 col-md-6">
                    <div><b><u>Jornada</u></b></div>
                  </div>
                  <div class="col-9 col-md-6 text-center">
                    <div><b><u>Niveles</u></b></div>
                  </div>
                </div>
                <div v-for="i in Object.keys(nivelesPokemon).length" :key="i" class="row mt-3 text-center">
                  <div class="col-3 col-md-6">
                    <div>{{ i }}</div>
                  </div>
                  <div class="col-9 col-md-6">
                    <div>{{ nivelesPokemon[i].join('|') }}</div>
                  </div>
                </div>
            </div>
            <h4 class="mt-5"><u>Límite Stats/EVs</u></h4>
            <div class="mt-3">
              <p>Por cada Jornada, se establecerá un límite de Stats y de EVs.</p>
              <div class="row ">
                  <div class="col-4">
                    <div><b><u>Jor.</u></b></div>
                  </div>
                  <div class="col-4">
                    <div><b><u>Stats</u></b></div>
                  </div>
                  <div class="col-4">
                    <div><b><u>EVs</u></b></div>
                  </div>
                </div>

                <div v-for="i in Object.keys(statsMaximos).length" :key="i" class="row mt-3">
                  <div class="col-4">
                    <div>{{ i }}</div>
                  </div>
                  <div class="col-4">
                    <div>{{statsMaximos[i]}}</div>
                  </div>
                  <div class="col-4">
                    <div>{{evsMaximos[i]}}</div>
                  </div>
                </div>
            </div>

            
            <h4 class="mt-5"><u>MTs</u></h4>
            Se aplicarán restricciones por potencia a las MTs que puedas comprar.

            <div class="row mt-3">
              <div class="col-6">
                <div><b><u>Jor.</u></b></div>
              </div>
              <div class="col-6">
                <div><b><u>Potencia</u></b></div>
              </div>
            </div>

            <div v-for="(valor, clave) in potenciaMt" :key="clave" class="row mt-3">
              <div class="col-6">
                <div>{{clave}}</div>
              </div>
              <div class="col-6">
                <div>{{valor}}</div>
              </div>
            </div>

          </div>

          <div class="small" v-if="numSeccion == 3">
            <h4><b><u>Cambios y crianza</u></b></h4>
            <div class="mt-3">
              <h6 class="mt-3"><b><u>Cambios</u></b></h6>
              <p>Solo se permitirá hacer un cambio de Pokémon en el equipo respecto al equipo utilizado en la jornada anterior.</p>
              <p>Se podrá capturar Pokémon salvaje de la misma especie que su Pokémon inicial para evitar tener un inicial neutro.</p>
              <p>Solo en la Jornada 9, la Jornada final, se podrá capturar únicamente un Pokémon semilegendario (600 Stats).</p>
              <h6 class="mt-5"><b><u>Crianza</u></b></h6>
              <p>La crianza estará disponible a partir de la <b>Jornada 6</b>.</p>
              <p>Los Pokémon conseguidos a través de crianza solo podrán tener como máximo 2 stats con los IVs al 31.</p>
            </div>
          </div>

          <div class="small" v-if="numSeccion == 4" >
            <h4><b> <u>Capturas de pantalla</u></b></h4>
            <div class="mt-3">
              <p style="">Al contrario que en otras ediciones, en esta no es obligatorio hacer captura de pantalla para validar tu equipo antes de un combate.</p><br>
              <p>Sin embargo, ambos jugadores pueden pedir una captura de pantalla para comprobar que el equipo es válido al acabar el combate.</p><br>
              <p>Cabe destacar que el hecho de pedir una captura de pantalla no implica desconfianza si no favorecer a que el combate sea limpio y evitar irregularidades no intencionadas.</p>
            </div>
          </div>

          <div v-if="numSeccion == 5">
            <h4><u>Handicaps</u></h4>
            <div class="mt-3 small">
              <p>No queremos que los jugadores más experimentados se aburran en el torneo aplastando a los novatos, por eso, se han incluido los handicaps, para que puedan tener un poco de desafío y no pierdan el interés antes de la última jornada.</p>
              <p>Además, quién sabe, quizás algún novato sorprenda a todos y se convierta en el campeón del torneo.</p>

              <p class="mt-5"><i>Los handicaps son acumulativos</i></p>
              <div class="small mt-2">
                <div class="row ">
                  <div class="col-6">
                    <div><b><u>Diferencia</u></b></div>
                  </div>
                  <div class="col-6">
                    <div><b><u>Handicap</u></b></div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>3</p>
                  </div>
                  <div class="col-6">
                    <p>1 Pokémon menos</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>4</p>
                  </div>
                  <div class="col-6">
                    <p>Enseñar el equipo al rival</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>5</p>
                  </div>
                  <div class="col-6">
                    <p>No equipar objetos</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>6</p>
                  </div>
                  <div class="col-6">
                    <p>Intercambiar un Pokémon (sin objetos)</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>7</p>
                  </div>
                  <div class="col-6">
                    <p>Te eligen el Pokémon que iniciará el combate</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>8</p>
                  </div>
                  <div class="col-6">
                    <p>1 Pokémon menos</p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-6">
                    <p>9</p>
                  </div>
                  <div class="col-6">
                    <p>Cambios no permitidos en combate</p>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-6">
                    <p>10</p>
                  </div>
                  <div class="col-6">
                    <p>Rival recibe x3 si gana</p>
                  </div>
                </div>
              </div>


            </div>

            <div class="mt-5"><i><p>El handicap de 10 de diferencia no se aplicará en la <u>última Jornada</u>.</p>
                              Los puntos en la última Jornada <u>serán dobles</u>.</i></div>
          </div>

          <div class="small" v-if="numSeccion == 6">
            <h4><b><u>Objetos y capturas</u></b></h4>
            <div class="mt-3">
              <p><b>Equipar</b> objetos para el combate estará permitido a partir de la <b>Jornada 4</b>.</p>
              <p class="mt-5">Tanto la obtención de objetos como la captura de Pokémon, se realizará exclusivamente en las rutas determinadas en el mapa de cada jornada.</p>
              <p class="mt-5">No se puede equipar el mismo objeto en varios Pokémon.</p>
            </div>
          </div>
        </div>
        
      </div>
        
    </div>
  </div>
</template>

<script>
import { nivelesPokemon, statsMaximos, evsMaximos, potenciaMt} from "@/helpers/generalHelper.js";

export default {
  data() {
    return{
      numSeccion: 2,
      nivelesPokemon : nivelesPokemon,
      statsMaximos : statsMaximos,
      evsMaximos : evsMaximos,
      potenciaMt : potenciaMt,
    }
  },
}
</script>

<style scoped>

#normas {
 text-align: center !important;
}

.secciones{
  cursor: pointer;
}

.main {
  margin: 0 5%;
}

.padding-sides{
  padding-left: 10%;
  padding-right: 10%;
}



@media screen and (max-width: 600px){
  .small{
    font-size: 12px;
  }
}


</style>