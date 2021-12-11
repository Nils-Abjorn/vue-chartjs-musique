<template>
  <div>
    <select v-model="genreKey">
      <option v-for="(value, key) in attirances" :key="key">
        {{ key }}
      </option>
    </select>
    <RadarChart v-bind:name="genreKey" v-bind:affinites="currentData" />
  </div>
</template>

<script>
import { attiranceTaux } from "../utils";
import RadarChart from "./RadarChart.vue";

export default {
  data() {
    return {
      attirances: attiranceTaux(),
      genreKey: "autre",
    };
  },
  computed: {
    currentData() {
      if (this.genreKey != null) {
        return this.attirances[this.genreKey];
      }
      return null;
    },
  },
  components: {
    RadarChart,
  },
};
</script>
