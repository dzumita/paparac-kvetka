<template>
  <nav id="menu">
    <p class="menu-item">Paparac</p>
    <p class="menu-item">Furnace</p>
    <p class="menu-item">Anvil</p>
    <p class="menu-item">Krama</p>
    <p class="menu-item">Info</p>
    <p class="menu-item">Settings</p>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Menu",
};
</script>

<style scoped>
#menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spaceLevel0) var(--spaceLevel3);
  flex-wrap: wrap;
}

.menu-item {
  color: var(--activeColor);
  cursor: pointer;
}
</style>
