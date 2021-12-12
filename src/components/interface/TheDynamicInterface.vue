<template>
  <div id="dynamic-interface">
    <Skrynia v-for="(item, index) in Array(2)" :key="index" />
  </div>
</template>

<script>
import Skrynia from "../Skrynia.vue";

export default {
  name: "TheDynamicInterface",
  components: { Skrynia },
};
</script>

<style scoped>
#dynamic-interface {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spaceLevel1);
}
</style>
