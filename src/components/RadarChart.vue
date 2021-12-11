<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    affinites: Object,
    name: String,
  },
  data() {
    return {
      chartData: null,
      options: null,
    };
  },
  methods: {
    renderThisChart() {
      this.chartData = {
        labels: Object.keys(this.affinites),
        datasets: [
          {
            label: this.name,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: Object.values(this.affinites),
          },
        ],
      };
      this.renderChart(this.chartData, {
        responsive: true,
        maintainAspectRatio: false,
      });
    },
  },
  watch: {
    affinites: function() {
      this.$data._chart.destroy();
      this.renderThisChart();
    },
  },
  mounted() {
    this.renderThisChart();
  },
};
</script>
