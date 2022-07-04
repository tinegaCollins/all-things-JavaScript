<template>
    <Line :chart-data="data" :chart-options="options" css-classes="chart-container"/>
</template>

<script setup>
import {ref,computed} from 'vue';
import { Line } from 'vue-chartjs'

import { Chart, LineController, PointElement, LineElement } from 'chart.js'

Chart.register(LineController,LineElement, PointElement);

const dataValues = ref([12,13,3,5,16,17,18])

const data = computed(()=> ({
    labels : ["sun","mon","tue","wed","thurs","fri","sat"],

    datasets: [
        {
            label: 'Temperature',
            backgroundColor: 'blue',
            data: dataValues.value
        }
    ]
}))

const options  = ref({
    plugins: {
        title: {
            text: 'Temperature and Humidity',
        }
    },
})
</script>

<style> 
.chart-container {
    width: 300px;
    height: 300px;
}
</style>