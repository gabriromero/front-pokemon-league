<template>
    <p class="mt-4">{{textoMensaje}}</p>
    <div class="mt-5">
        <vue-countdown :time="tiempoSiguientesCombates" v-slot="{  days, hours, minutes, seconds }">
            <div>
                <br/>
                <p>Tiempo restante:</p>
                <div class="tiempo-restante" v-if="days>0">
                    <span>{{days}}d : {{ hours }}h : {{ minutes }}m : {{ seconds }}s </span>
                </div>
                <div class="tiempo-restante" v-else>
                    <span>{{ hours }}h : {{ minutes }}m : {{ seconds }}s </span>
                </div>
                
            </div>
        </vue-countdown>
    </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
    props: {
        tiempoSiguientesCombates: Number,
        textoMensaje: String
    },
    components: {
        VueCountdown
    }
}
</script>

<style>
.tiempo-restante {
    text-align: center;
    font-size: 1rem;
}
</style>