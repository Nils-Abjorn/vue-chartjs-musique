<template>
  <div id="app">
    <BarChart />
    <TauxTelechargement />
    <Affinites />
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import Affinites from "./components/Affinites.vue";
import TauxTelechargement from "./components/TauxTelechargement.vue";

export default {
  name: "App",
  components: {
    Affinites,
    TauxTelechargement,
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
