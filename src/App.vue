<template>
  <RouterView />
  <RouterView />
</template>

<script>
import TattooPage from "./components/TattooPage.vue";
import TattooPage from "./components/Tattoo-page.vue";
import LandingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage2 from "./components/TattooPage2.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: { Home, TattooPage, LandingPage, TattooPage2 },
export default {
  name: "App",
  components: { Home },
  data() {
    return {};
  },
};
    return {};
  },
};
</script>

<style></style>
<style></style>
