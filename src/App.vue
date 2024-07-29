<template>
  <!-- <TattooPage></TattooPage> -->
  <LandingPage></LandingPage>
</template>

<script>
import LandingPage from "./components/Landing-page.vue";
import TattooPage from "./components/Tattoo-page.vue";

export default {
  name: "App",
  components: { TattooPage, LandingPage },
  data() {
    return {};
  },
};
</script>

<style></style>
