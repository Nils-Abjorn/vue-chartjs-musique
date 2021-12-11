<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    legalite: Object,
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
        labels: [
          "toujours de manière legale",
          "parfois de manière illégale",
          "autant de manière illegale que légale",
          "toujours de façon illégale",
          "ne souhaite pas répondre",
        ],
        datasets: [
          {
            label: this.name,
            backgroundColor: [
              "#76ed3b",
              "#edea3b",
              "#ed793b",
              "#ed653b",
              "#eeeeee",
            ],
            data: Object.values(this.legalite),
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
    legalite: function() {
      this.$data._chart.destroy();
      this.renderThisChart();
    },
  },
  mounted() {
    this.renderThisChart();
  },
};
</script>
