<template>
  <button class="skladnik skladnik-empty--s">PAKV</button>
  <button class="skladnik skladnik-iron--s">PAKV</button>
  <button class="skladnik skladnik-material--s">PAKV</button>
</template>

<script lang="ts">
export default {
  name: "Skladnik",
};
</script>

<style scoped>
.skladnik {
  border: var(--border);
  border-radius: var(--borderRadius);
  cursor: pointer;
  user-select: none;

  font-family: var(--mainFont);
  font-size: var(--fontSizeLevel0);
  line-height: 0.7rem;
  color: var(--activeColor);
  text-transform: uppercase;
  word-break: break-all;
  text-align: center;

  width: var(--skladnikSize);
  height: var(--skladnikSize);
  padding: calc(var(--spaceLevel0) / 2);
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.skladnik:active {
  transform: scale(0.9);
  -webkit-tap-highlight-color: transparent;
}

.skladnik:hover,
.skladnik:focus {
  color: var(--emptyColor);
  border-color: var(--emptyColor);
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.skladnik:focus {
  border-radius: 14px;
}

/* .skladnik-empty--s {
  color: var(--emptyColor);
  border-color: var(--emptyColor);
}

.skladnik-iron--s {
  color: var(--ironColor);
  border-color: var(--ironColor);
}

.skladnik-material--s {
  color: var(--materialColor);
  border-color: var(--materialColor);
} */
</style>
