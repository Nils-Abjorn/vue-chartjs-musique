<template>
  <div>
    <select v-model="genreKey">
      <option v-for="(value, key) in ecoutesLegaleTaux" :key="key">
        {{ key }}
      </option>
    </select>
    <PieChart v-bind:name="genreKey" v-bind:legalite="currentData" />
  </div>
</template>

<script>
import { ecoutesLegaleTaux } from "../utils";
import PieChart from "./PieChart.vue";

export default {
  data() {
    return {
      ecoutesLegaleTaux: ecoutesLegaleTaux(),
      genreKey: "autre",
    };
  },
  computed: {
    currentData() {
      if (this.genreKey != null) {
        return this.ecoutesLegaleTaux[this.genreKey];
      }
      return null;
    },
  },
  mounted() {},
  components: {
    PieChart,
  },
};
</script>
