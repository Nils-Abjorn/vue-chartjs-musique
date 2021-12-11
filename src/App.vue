<template>
  <div id="app">
    <BarChart />
    <Affinites />
  </div>
</template>

<script>
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
import Affinites from "./components/Affinites.vue";

export default {
  name: "App",
  components: {
    Affinites,
    PieChart,
    BarChart,
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
