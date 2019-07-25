<template>
  <AreaChart class="small" :AreaData="AreaData" :AreaOptions="AreaOptions" :height="200"/>
</template>

<script>
import AreaChart from './js/AreaChart';

export default {
  components: {
    AreaChart
  },
  data() {
    return {
      /** Area Chart **/
      AreaData: {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "OUT",
          "SEPT"
        ],
        datasets: [
          {
            label: "Data",
            borderColor: "#1228fa",
            pointRadius: 0,
            fill: true,
            backgroundColor: "#1228fa",
            borderWidth: 1,
            data: [50, 40, 68, 70, 120, 67, 110, 40, 10]
          },
          {
            label: "Data 2",
            borderColor: "#fd3a95",
            pointRadius: 0,
            fill: true,
            backgroundColor: "#fd3a95",
            borderWidth: 1,
            data: [69, 68, 90, 85, 135, 85, 120, 50, 45]
          }
        ]
      },
      AreaOptions: {
        legend: {
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                // fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                drawTicks: false,
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 10,
                fontColor: "rgba(0,0,0,0.5)"
                // fontStyle: "bold"
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<style>
</style>
