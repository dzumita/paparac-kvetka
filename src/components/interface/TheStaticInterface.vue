<template>
  <div id="static-interface"><Menu /></div>
</template>

<script>
import Menu from "../Menu.vue";

export default {
  name: "TheStaticInterface",
  components: { Menu },
};
</script>

<style scoped>
#static-interface {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
