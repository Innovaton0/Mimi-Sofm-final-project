<template>

  <Navbar></Navbar>
  <div class="bg-[#F9EEDF] h-[100vh] font-mont text-black flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold text-[#F09235] tracking-wider mb-4">ERROR 404</h1>
    <h3 class="text-xl font-semibold ">Not Found</h3>
  </div>
  <Footer></Footer>
    </template>
    
    <script>
    import Navbar from "./Navbar.vue";
    import Footer from "./Footer.vue";
    
      export default {
        name: "NotFound",
        components: {Navbar, Footer},
        data() {
          return {};
        },
      };
    
    </script>