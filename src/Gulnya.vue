<template>
  <div
    id="gulnya-layout"
    :class="{
      devMode: isDevMode,
      fullScreenMode: isFullScreenMode,
      transitionMode: isTransitionMode,
    }"
  >
    <div id="gulnya-interface-wrapper">
      <div id="gulnya-interface-scroll">
        <div id="gulnya-interface">
          <p>Paparac</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotkeys from "hotkeys-js";

export default {
  name: "Gulnya",
  data() {
    return {
      isDevMode: false,
      isFullScreenMode: false,
      isTransitionMode: true,
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
@import url("./theme/sizes.css");

#gulnya {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#gulnya-layout {
  background: var(--background);
  color: var(--fontColor);

  width: 100%;
  height: 100%;
  padding: var(--spaceLevel2);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#gulnya-interface-wrapper {
  border: var(--border);
  border-radius: var(--borderRadius);

  height: 100%;
  max-height: var(--maxHeight);
  width: 100%;
  max-width: var(--maxWidth);
  padding: var(--spaceLevel1);
}

#gulnya-interface-scroll {
  overflow: auto;
  height: 100%;
  max-height: var(--maxHeight);
  width: 100%;
  max-width: var(--maxWidth);
}

#gulnya-interface {
  height: 100%;
  width: 100%;
  max-width: var(--maxWidth);
  min-width: var(--minWidth);
  min-height: var(--minHeight);
  max-height: var(--maxHeight);
  padding-right: var(--spaceLevel1);
  padding-bottom: var(--spaceLevel1);
}
</style>
