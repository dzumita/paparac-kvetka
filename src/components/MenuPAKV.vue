<template>
  <div id="menu-pakv">
    <div class="menu-item-pakv">Paparac</div>
    <div class="menu-item-pakv">Furnace</div>
    <div class="menu-item-pakv">Anvil</div>
    <div class="menu-item-pakv">Krama</div>
    <div class="menu-item-pakv">Info</div>
    <div class="menu-item-pakv">Setting</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MenuPAKV",
};
</script>

<style scoped>
#menu-pakv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spaceLevel0) var(--spaceLevel3);
  flex-wrap: wrap;
}

.menu-item-pakv {
  color: var(--activeColor);
  cursor: pointer;
}
</style>
