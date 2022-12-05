<template>
  <RouterView/>
</template>

<script>
import store from "@/scripts/store";

export default {
  name: 'App',
  setup() {
    const id = sessionStorage.getItem("id");

    if(id) {
      store.commit("setAccount", id);
    }
  }
}
</script>

<style scoped>
  
</style>
