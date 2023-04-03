<template>
    <p class="mt-4">Los nuevos combates apareceran el Lunes a las 18:00</p>
    <div class="mt-5">
        <vue-countdown :time="tiempoSiguientesCombates" v-slot="{ hours, minutes, seconds }">
            <div>
                <br/>
                <p>Tiempo restante:</p>
                <h2>{{ hours }}h : {{ minutes }}m : {{ seconds }}s </h2>
            </div>
        </vue-countdown>
    </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
    props: {
        tiempoSiguientesCombates: Number,
    },
    components: {
        VueCountdown
    }
}
</script>

<style>
</style>