<template>
  <div id="global-interface-wrapper">
    <div id="global-interface-scroll">
      <div id="global-interface">
        <TheDynamicInterface />
        <TheStaticInterface />
      </div>
    </div>
  </div>
</template>

<script>
import TheDynamicInterface from "./TheDynamicInterface.vue";
import TheStaticInterface from "./TheStaticInterface.vue";

export default {
  name: "TheGlobalInterface",
  components: { TheDynamicInterface, TheStaticInterface },
};
</script>

<style scoped>
#global-interface-wrapper {
  border-radius: var(--borderRadius);

  height: 100%;
  max-height: var(--maxHeight);
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
}

#global-interface-scroll {
  height: 100%;
  max-height: var(--maxHeight);
  width: 100%;
  max-width: var(--maxWidth);
  overflow: auto;
}

#global-interface {
  height: 100%;
  max-height: 100%;
  min-height: var(--minHeight);
  width: 100%;
  max-width: 100%;
  min-width: var(--minWidth);
  padding: var(--spaceLevel1);

  display: grid;
  grid-template-rows: calc(100% - 50px) 50px;
  gap: var(--spaceLevel1);
}
</style>
