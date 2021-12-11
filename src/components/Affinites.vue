<template>
  <div>
    <div v-for="value in attirances" :key="value.id">
      {{ value }}
    </div>
  </div>
</template>

<script>
import { attiranceTaux } from "../utils";
import RadarChart from "./components/RadarChart.vue";

export default {
  data() {
    return {
      attirances: attiranceTaux(),
    };
  },
  components: {
    RadarChart,
  },
};
</script>
