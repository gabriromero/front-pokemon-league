<template>
    <p class="mt-4">{{textoMensaje}}</p>
    <div class="mt-5">
        <vue-countdown :time="tiempoSiguientesCombates" v-slot="{  days, hours, minutes, seconds }">
            <div>
                <br/>
                <p>Tiempo restante:</p>
                <h2>{{days}}d : {{ hours }}h : {{ minutes }}m : {{ seconds }}s </h2>
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