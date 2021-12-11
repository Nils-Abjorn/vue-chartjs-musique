<template>
  <div id="app">
    <BarChart />
    <Affinites />
  </div>
</template>

<script>
import AreaChart from "./components/AreaChart.vue";
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
import DoughnutChart from "./components/DoughnutChart.vue";
import Affinites from "./components/Affinites.vue";

export default {
  name: "App",
  components: {
    Affinites,
    AreaChart,
    PieChart,
    BarChart,
    LineChart,
    DoughnutChart,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
