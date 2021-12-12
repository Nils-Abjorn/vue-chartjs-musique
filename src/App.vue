<template>
  <div id="app">
    <h1>Les pratiques d’écoute de musique en ligne</h1>
    <div class="graph_container">
      <h2>Nombres découtes et part du téléchargement dans celles-ci</h2>
      <BarChart />
    </div>
    <div class="graph_container">
      <h2>Taux de telechargement par style écouté</h2>
      <TauxTelechargement />
    </div>
    <div class="graph_container">
      <h2>Taux d'affinités entres styles</h2>
      <Affinites />
    </div>
    <footer>
      affichage basé sur un sondage réalisé par Hadopi sur un échantillion de
      2200 français en octobre 2020.
      <a
        href="https://www.data.gouv.fr/fr/datasets/les-pratiques-decoute-de-musique-en-ligne-octobre-2020"
      >
        Source
      </a>
    </footer>
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
  padding-left: 10px;
  padding-right: 10px;
}

h1 {
  padding-bottom: 6vh;
}

footer {
  text-align: start;
  font-size: smaller;
}

.graph_container {
  padding-bottom: 5vh;
}
</style>
