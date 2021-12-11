<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    affinites: Object,
    name: String,
  },
  mounted() {
    this.renderChart(
      {
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
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
