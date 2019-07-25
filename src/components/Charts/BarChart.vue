<template>
  <BarChart :chartData="chartData" :chartOptions="chartOptions" :height="100"/>
</template>

<script>
import BarChart from './js/BarChart';

export default {
  components: {
    BarChart
  },
  data() {
    return {
      /** Bar Chart **/
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "expansions",
            backgroundColor: "#1228fa",
            data: [35, 59, 80, 81, 56, 55, 40, 40, 69, 67, 89, 45]
          },
          {
            label: "cancellations",
            backgroundColor: "#f2f4ff",
            data: [28, 48, 40, 19, 86, 27, 90, 56, 78, 98, 45, 74]
          }
        ]
      },
      chartOptions: { 
        title: {
						display: true,
						text: 'Chart.js Bar Chart - Stacked'
          }, 
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
      }
    };
  }
};
</script>

<style>
</style>
