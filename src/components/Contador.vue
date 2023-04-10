<template>
    <p class="mt-4">{{textoMensaje}}</p>
    <div class="mt-5">
        <vue-countdown :time="tiempoSiguientesCombates" v-slot="{  days, hours, minutes, seconds }">
            <div>
                <br/>
                <p>Tiempo restante:</p>
                <div v-if="days>0">
                    <h2>{{days}}d : {{ hours }}h : {{ minutes }}m : {{ seconds }}s </h2>
                </div>
                <div v-else>
                    <h2>{{ hours }}h : {{ minutes }}m : {{ seconds }}s </h2>
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
</style>