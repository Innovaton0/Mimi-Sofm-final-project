<template>
<Navbar></Navbar>
<h1>HELP</h1>

<p> Aquí van las preguntas frecuentes, página de Ayuda</p>
<Footer></Footer>
</template>

<script>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';


  export default {
    name: "Help",
    components: { Navbar, Footer },
    data() {
      return {};
    },
  };

</script>

<style></style>