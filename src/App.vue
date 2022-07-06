<template>
  <div>
    <nav-bar />
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
