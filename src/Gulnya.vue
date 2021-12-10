<template>
  <div
    id="gulnya-layout"
    :class="{
      devMode: isDevMode,
      fullScreenMode: isFullScreenMode,
      transitionMode: isTransitionMode,
      borderlessMode: isBorderlessMode,
    }"
  >
    <div id="gulnya-interface-wrapper">
      <div id="gulnya-interface-scroll">
        <div id="gulnya-global-interface">
          <div id="gulnya-dynamic-interface">
            <SkryniaPAKV v-for="(item, index) in Array(4)" :key="index" />
          </div>
          <div id="gulnya-static-interface"><MenuPAKV /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotkeys from "hotkeys-js";
import SkryniaPAKV from "./components/SkryniaPAKV.vue";
import MenuPAKV from "./components/MenuPAKV.vue";

export default {
  name: "Gulnya",
  components: { SkryniaPAKV, MenuPAKV },
  data() {
    return {
      isDevMode: false,
      isFullScreenMode: false,
      isTransitionMode: true,
      isBorderlessMode: false,
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
    toggleBorderlessMode() {
      this.isBorderlessMode = !this.isBorderlessMode;
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
    hotkeys("p+b", () => {
      this.toggleBorderlessMode();
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

#gulnya-global-interface {
  height: 100%;
  width: 100%;
  max-width: 100%;
  min-width: var(--minWidth);
  max-height: 100%;
  padding: var(--spaceLevel1);

  display: grid;
  grid-template-rows: calc(100% - 50px) 50px;
  gap: var(--spaceLevel1);
}

#gulnya-dynamic-interface {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spaceLevel1);
}

#gulnya-static-interface {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
