import { Line } from 'vue-chartjs' 

export default {
  extends: Line, 
  props: {
    AreaData: {
      type: Object,
      default: null
    },
    AreaOptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.AreaData, this.AreaOptions)
  }
}