<template>
  <div id="normas">
    <h1>Normas</h1>
    <div class="mt-5">
      <div class="main">
        <div class="row mt-3 ">
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 1">Mercado negro</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 2">Límite Stats/EVs</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 3">Cambios y crianza</button>
        </div>

        <div class="row">
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 4">Capturas de pantalla</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 5">Handicaps</button>
          <button class="col-sm-4 secciones" v-on:click="numSeccion = 6">Objetos y capturas</button>
        </div>

        <div class="border-example framed mt-4 mb-5 padding-sides" style="background-color: #9eacad;">
          <div v-if="numSeccion == 1">
            <h4><b><u>Mercado negro</u></b></h4>
            <div class="mt-3">
              <p class="mb-4">El uso del Mercado Negro solo será permitido cuando se 
              utilice para ahorrar tiempo y dinero.</p>
              <h6><b><u>Pokémon</u></b></h6>
              <p>Queda totalmente prohibido la compra de absolutamente cualquier Pokémon.</p>
              <h6><b><u>Objetos</u></b></h6>
              <p><i>Está prohibida la compra de cualquier objeto a excepción de:</i></p>
              <p>1. Todos los objetos que estén a la venta en Tienda Pokémon o Centro Comercial disponibles en las rutas determinadas en el mapa.</p>
              <p>2. Carameloraros</p>
              <p>3. Vitaminas</p>
              <p>4. Bayas reductoras de EVs</p>
              <p>5. Campana alivio</p>
            </div>
          </div>

          <div v-if="numSeccion == 2">
            <h4><u>Sección 2</u></h4>
            <div class="mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
          </div>

          <div v-if="numSeccion == 3">
            <h4><u>Sección 3</u></h4>
            <div class="mt-3">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </div>
          </div>

          <div v-if="numSeccion == 4" >
            <h4><b> <u>Capturas de pantalla</u></b></h4>
            <div class="mt-3">
              <p style="">Al contrario que en otras ediciones, en esta no es obligatorio hacer captura de pantalla para validar tu equipo antes de un combate.</p><br>
              <p>Sin embargo, ambos jugadores pueden pedir una captura de pantalla para comprobar que el equipo es válido al acabar el combate.</p><br>
              <p>Cabe destacar que el hecho de pedir una captura de pantalla no implica desconfianza si no favorecer a que el combate sea limpio y evitar irregularidades no intencionadas.</p>
            </div>
          </div>

          <div v-if="numSeccion == 5">
            <h4><u>Sección 5</u></h4>
            <div class="mt-3">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            </div>
          </div>

          <div v-if="numSeccion == 6">
            <h4><u>Sección 6</u></h4>
            <div class="mt-3">
              {{players}}
            </div>
          </div>
        </div>
        
      </div>
        
    </div>
  </div>
</template>

<script>
import {getFakePlayers} from '@/api/home'
export default {
  data() {
    return{
      numSeccion: 1,
      players: ''
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
  }
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


</style>