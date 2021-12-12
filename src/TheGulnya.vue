<template>
  <div
    id="gulnya-layout"
    :class="{
      devMode: isDevMode,
      fullScreenMode: isFullScreenMode,
      transitionMode: isTransitionMode,
    }"
  >
    <TheGlobalInterface />
  </div>
</template>

<script>
import hotkeys from "hotkeys-js";
import TheGlobalInterface from "./components/interface/TheGlobalInterface.vue";

export default {
  name: "TheGulnya",
  components: { TheGlobalInterface },
  data() {
    return {
      isDevMode: false,
      isFullScreenMode: false,
      isTransitionMode: false,
    };
  },
  methods: {
    toggleDevMode() {
      this.isDevMode = !this.isDevMode;
    },
    toggleFullScreenMode() {
      this.isFullScreenMode = !this.isFullScreenMode;
    },
    toggleTransitionMode() {
      this.isTransitionMode = !this.isTransitionMode;
    },
  },
  mounted() {
    hotkeys("p+d", () => {
      this.toggleDevMode();
    });
    hotkeys("p+f", () => {
      this.toggleFullScreenMode();
    });
    hotkeys("p+t", () => {
      this.toggleTransitionMode();
    });
  },
};
</script>

<style>
@import url("./theme/styleGuide.css");

#gulnya {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#gulnya-layout {
  background: var(--layoutBackground);
  color: var(--fontColor);

  width: 100%;
  height: 100%;
  padding: var(--spaceLevel0);
  overflow: hidden;
}
</style>
