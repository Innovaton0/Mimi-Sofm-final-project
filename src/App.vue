<template>
  <RouterView />
</template>

<script>
import TattooPage from "./components/TattooPage.vue";
import LandingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: { Home, TattooPage, LandingPage },
  data() {
    return {};
  },
};
</script>

<style></style>
