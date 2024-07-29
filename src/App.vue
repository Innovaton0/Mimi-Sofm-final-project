
<template>

 <RouterView />
  
</template>

<script>
import TattooPage from './components/Tattoo-page.vue';
import LandingPage from "./components/LandingPage.vue";
import Home from './components/Home.vue';

  export default {
    name: "App",
    components: {Home},
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
