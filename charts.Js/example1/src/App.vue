<template>
  <BarChart />
  <barchart2Vue/>
</template>

<script>
import BarChart from './components/BarChart.vue'
import barchart2Vue from './components/barchart2.vue'


export default {
  name: 'App',
  components: { BarChart, barchart2Vue }
}
</script>