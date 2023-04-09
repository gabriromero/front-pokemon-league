<template>
  <div id="normas">
    <h1>Normas</h1>
    <div class="mt-5">
      <div class="main">
        <div>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 0 }" v-on:click="numSeccion = 0">Calendario Jornadas</span>
        </div>
        <div class="row mt-3 ">
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 2 }" v-on:click="numSeccion = 2">Límites por jornada</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 4 }" v-on:click="numSeccion = 4">Pokémon Válidos</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 8 }" v-on:click="numSeccion = 8">Combates</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 3 }" v-on:click="numSeccion = 3">Cambios entre Jornada</span>

        </div>

        <div class="row mb-1">
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 7 }" v-on:click="numSeccion = 7">Screenshots</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 1 }" v-on:click="numSeccion = 1">Mercado negro</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 5 }" v-on:click="numSeccion = 5">Handicaps</span>
          <span class="mb-3 col-6 col-md-3 secciones" :class="{ seccionActiva: numSeccion == 6 }" v-on:click="numSeccion = 6">Objetos y crianza</span>
        </div>

        <div class="border-example framed mt-4 mb-5 padding-sides" style="background-color: rgb(207 207 207);">

          <div class="small" v-if="numSeccion == 0">
            <h4><b><u>Calendario por Jornadas</u></b></h4>
            <div class="mt-3">
              <div class="row">
                <div v-for="(horario, index) in horariosJornada" :key="index" class="col-sm-12 col-xl-4 mt-4">
                  <h6><u>Jornada {{ index+1 }}</u></h6>
                  <p>Del {{ horario[0].getDate() }} de {{ horario[0].toLocaleString('default', { month: 'long' }) }} al {{ horario[1].getDate() }} de {{ horario[1].toLocaleString('default', { month: 'long' }) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="small" v-if="numSeccion == 1">
            <h4><b><u>Mercado negro</u></b></h4>
            <div class="mt-3">
              <p class="mb-4">El uso del Mercado Negro solo será permitido cuando se 
              utilice para ahorrar tiempo y dinero.</p>
              <h6 class="mt-5"><b><u>Pokémon</u></b></h6>
              <p><i>Queda prohibida la compra de cualquier Pokémon a excepción de:</i></p>
              <p>1. Pokémon orientados a farmear y que jamás se podrán usar en combate</p>
              <h6 class="mt-5"><b><u>Objetos</u></b></h6>
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
            Se aplicarán restricciones por potencia a las MTs que <u>puedas comprar</u>.

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
            <h4><b><u>Cambios entre Jornada</u></b></h4>
            <div class="mt-3">
              <p>Solo se permitirá hacer un cambio de Pokémon en el equipo respecto al equipo utilizado en la jornada anterior.</p>
            </div>
          </div>

          <div class="small" v-if="numSeccion == 4" >
            <h4><b><u>Pokémon Válidos</u></b></h4>
            <div class="mt-3">
              <p>Solo serán válidos los Pokémon capturados por el mismo entrenador y capturados dentro de las zonas de captura disponibles por Jornada.</p>
              <h6 class="mt-5"><b><u>Pokémon iniciales salvajes</u></b></h6>
              <p>Solo se podrán capturar los mismos iniciales salvajes que el elegido al incio de la partida.</p>
              <h6 class="mt-5"><b><u>Semilegendarios</u></b></h6>
              <p>Solo estarán disponibles en la <span class="jornada">Jornada 9</span> y solo se podrá llevar a uno en el equipo.</p><br>
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

            <div class="mt-5"><i><p>El handicap de 10 de diferencia no se aplicará en la <span class="jornada">Jornada 9</span>.</p>
                              Los puntos en la <span class="jornada">Jornada 9</span> <u>serán dobles</u>.</i></div>
          </div>

          <div class="small" v-if="numSeccion == 6">
            <h6 class="mt-3"><b><u>Objetos</u></b></h6>
            <div class="mt-3">
              <p>Equipar objetos para el combate estará permitido a partir de la <b class="jornada">Jornada 4</b>.</p>
              <p class="mt-5">Los únicos objetos válidos son los que se encuentran exclusivamente en las rutas determinadas en el mapa de cada jornada.</p>
              <p class="mt-5">No se puede equipar el mismo objeto en varios Pokémon.</p>
              <p class="mt-5">Solo para la <span class="jornada">Jornada 9</span>, se podrán comprar objetos en el Mercado negro.</p>

              <h6 class="mt-5"><b><u>Crianza</u></b></h6>
              <p>La crianza estará disponible a partir de la <span class="jornada">Jornada 6</span>.</p>
              <p>Los Pokémon conseguidos a través de crianza solo podrán tener como máximo 2 stats con los IVs al 31.</p>
            </div>
          </div>

          <div class="small" v-if="numSeccion == 7" >
            <h4><b> <u>Screenshots</u></b></h4>
            <div class="mt-3">
              <p style="">Al contrario que en otras ediciones, en esta no es obligatorio hacer captura de pantalla para validar tu equipo antes de un combate.</p><br>
              <p>Sin embargo, ambos jugadores pueden pedir una captura de pantalla para comprobar que el equipo es válido al acabar el combate.</p><br>
              <p>Cabe destacar que el hecho de pedir una captura de pantalla no implica desconfianza si no favorecer a que el combate sea limpio y evitar irregularidades no intencionadas.</p>
            </div>
          </div>

          <div class="small" v-if="numSeccion == 8" >
            <h4><b> <u>Combates</u></b></h4>
            <div class="mt-3">
              <p>Los combates se realizarán el último fin de semana de la jornada.</p>
              <p>Los jugadores tendrán que ponerse de acuerdo con los contricantes para elegir el horario.</p>
              <p>El límite para hacer el combate será el último domingo a las 23:59.</p>
              <p>Si un jugador no marca el jugador ganador, el contrincante recibirá el punto.</p>
            </div>
          </div>
        </div>
        
      </div>
        
    </div>
  </div>
</template>

<script>
import { horarios_jornada, nivelesPokemon, statsMaximos, evsMaximos, potenciaMt} from "@/helpers/normasHelper.js";

export default {
  data() {
    return{
      numSeccion: 0,
      nivelesPokemon : nivelesPokemon,
      statsMaximos : statsMaximos,
      evsMaximos : evsMaximos,
      potenciaMt : potenciaMt,
      horariosJornada : horarios_jornada,
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

.secciones:hover{
  color: red;
}

.main {
  margin: 0 5%;
}

.padding-sides{
  padding-left: 10%;
  padding-right: 10%;
}

.seccionActiva{
  color: red;
}

.jornada{
  color: blue;
  font-weight: bold;
}

@media screen and (max-width: 600px){
  .small{
    font-size: 12px;
  }
}


</style>