<template>
    <h3 class="mt-5">Generando combates</h3>
    <p>Los nuevos combates apareceran el Lunes a las 18:00</p>
    <div class="mt-5">
        <vue-countdown :time="tiempoSiguientesCombates" v-slot="{ hours, minutes, seconds }">
            Tiempo restante: {{ hours }} horas, {{ minutes }} minutos, {{ seconds }} segundos.
        </vue-countdown>
    </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
    components: {
        VueCountdown
    }
}
</script>

<style>
</style>