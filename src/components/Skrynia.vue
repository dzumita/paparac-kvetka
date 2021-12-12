<template>
  <section class="skrynia">
    <h4 class="skrynia-title">{{ title }}</h4>

    <div class="skrynia-content-wrapper">
      <div class="skrynia-content-scroll">
        <div class="skrynia-content">
          <Skladnik
            v-for="(item, index) in Array(130).fill('MWMW')"
            :key="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Skladnik from "./Skladnik.vue";

export default {
  name: "Skrynia",
  components: { Skladnik },
  props: {
    title: {
      type: String,
      required: false,
      default: "(M) | Skrynia:",
    },
  },
};
</script>

<style scoped>
.skrynia {
  background: var(--sectionBackground);
  border-radius: var(--borderRadius);

  width: 100%;
  max-height: 100%;
  padding: var(--spaceLevel1);
  overflow: hidden;

  display: grid;
  grid-template-rows: min-content 1fr;
}

.skrynia-title {
  color: var(--activeColor);
  font-size: var(--fontSizeLevel1);
  line-height: var(--fontSizeLevel1);

  height: fit-content;
  margin-bottom: var(--spaceLevel2);
}

.skrynia-content-wrapper {
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow: hidden;
}

.skrynia-content-scroll {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.skrynia-content {
  padding: 0 var(--spaceLevel0) 1px 0;

  display: grid;
  gap: var(--spaceLevel1);
  grid-template-columns: repeat(auto-fit, 2rem);
  align-items: start;
}
</style>
