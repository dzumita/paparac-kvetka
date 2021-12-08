<template>
  <div class="skrynia-pakv">
    <div class="skrynia-pakv-header">
      <h4 class="skrynia-pakv-title">{{ title }}</h4>
    </div>
    <div class="skrynia-pakv-content-wrapper">
      <div class="skrynia-pakv-content-scroll">
        <div class="skrynia-pakv-content">
          <div
            class="skrynia-pakv-item"
            v-for="(item, index) in Array(130).fill('park')"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SkryniaPAKV",
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
.skrynia-pakv {
  border: var(--border);
  border-radius: var(--borderRadius);

  width: 100%;
  max-height: 100%;
  padding: var(--spaceLevel1);
  overflow: hidden;

  display: grid;
}

.skrynia-pakv-header {
  color: var(--activeColor);
  font-size: var(--fontSizeLevel1);
  line-height: var(--fontSizeLevel1);

  margin-bottom: var(--spaceLevel2);
}

.skrynia-pakv-content-wrapper {
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow: hidden;
}

.skrynia-pakv-content-scroll {
  overflow: auto;
  height: 100%;
  width: 100%;
}

.skrynia-pakv-content {
  display: grid;
  gap: var(--spaceLevel1);
  grid-template-columns: repeat(auto-fit, 2.6rem);
  padding: 0 var(--spaceLevel1) var(--spaceLevel1) 0;
}

.skrynia-pakv-item {
  font-size: var(--fontSizeLevel0);
  line-height: var(--fontSizeLevel0);
  color: var(--activeColor);
  word-break: break-all;
  text-align: center;

  border: var(--border);
  border-radius: var(--borderRadius);

  width: 2.6rem;
  height: 2.6rem;
  padding: var(--spaceLevel1);

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}
</style>
