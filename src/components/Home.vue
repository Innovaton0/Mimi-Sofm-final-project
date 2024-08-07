<template>
    
  <!-- IMAGEN -->
<header class="bg-[url('/src/assets/pexels-photo-955938.jpeg')] bg-cover h-[70vh] flex flex-col justify-between">
  <Navbar :bgColor="colorNavbar" :circleColor="navCircleColor"></Navbar>
  <!-- BOTONES -->
  <div class="flex justify-around items-center font-bold w-full translate-y-8">
    <router-link to="/tattoo" tag="button" class="bg-[#F09235] rounded-lg py-5 w-40 md:w-60 lg:w-80 text-center flex justify-center text-white">TATUAJES</router-link>
    <router-link to="tattooartists" tag="button" class="bg-[#F09235] p-3 py-5 w-40 md:w-60 lg:w-80 text-center rounded-lg text-white">TATUADORES</router-link>
  </div>
</header>

  <!-- FOTOS Y  FONDO BEIGE -->
  <main class="bg-[#F9EEDF] h-[30vh] flex justify-around items-center gap-2">
  
    <div class="flex justify-center sm:gap-5 flex-wrap">
      
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-1433273.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-2183131.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-6153346.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          />
        </div>
    
  </div>

    <div class="flex justify-center sm:gap-5 flex-wrap">
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-1803880.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7005727.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7147772.png"
            alt="Imagen Redonda"
            class="w-20 h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full object-cover"
          />
      </div>
    
  </div>

</main>





<Footer>
</Footer>

  </template>
  
  <script>
  import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

  export default {
    name: "home",
    components: { Footer, Navbar },
    data() {
      return {
        colorNavbar: "background-color: rgba(255,2555,255,0.4)",
        navCircleColor: "background-color:#888888"
      }
  }
  }
  
  </script>

  <style>

</style>