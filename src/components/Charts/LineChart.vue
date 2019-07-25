<template>
  <LineChart class="small" :chartData="chartData" :chartOptions="chartOptions" :height="200"/>
</template>

<script>
import LineChart from './js/LineChart'
export default {
  components: {
    LineChart 
  },
  data() {
    return {
      /** Bar Chart **/
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "expansions",
            backgroundColor: "#366cf3",
            data: [35, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "cancellations",
            backgroundColor: "#fd3995",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
</script>

<style>
</style>
