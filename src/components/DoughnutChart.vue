<script>
import { Doughnut } from "vue-chartjs";
import { ecoutes } from "../utils";

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: Object.keys(ecoutes()),
        datasets: [
          {
            label: "styles écoutés",
            backgroundColor: "#f87979",
            data: Object.values(ecoutes()),
            stack: "Stack 0",
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
