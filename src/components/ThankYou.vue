<template>
  <Navbar></Navbar>
 <main class ="flex flex-col justify-center items-center min-h-[80vh]">
   <h1 class="text-[#F09235] font-bold text-center text-5xl mb-5">¡GRACIAS!</h1>
   <p class="text-center mx-4">Nos contactaremos lo antes posible contigo, 
    un gran saludo, Equipo La Rama :) </p>
 </main>
 <Footer></Footer>
</template>

<script>
 import Navbar from "./Navbar.vue";
 import Footer from "./Footer.vue";

  export default {
    name: "Thank you",
    components: { Navbar, Footer },
    data () {
        return {

        }
    },
  };
</script>