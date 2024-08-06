<template>
  <header>
    
  <!-- IMAGEN -->
<section class="bg-[url('/src/assets/pexels-photo-955938.jpeg')] bg-cover h-[70vh]">
  <Navbar :bgColor="colorNavbar" :circleColor="navCircleColor"></Navbar>
  <!-- BOTONES -->
  <div class="flex justify-around items-center mt-[26rem] font-bold w-full">
    <router-link to="/tattoo" tag="button" class="bg-[#F09235] rounded-md py-5 px-10 flex justify-center text-white">TATUAJES</router-link>
    <router-link to="tattooartists" tag="button" class="bg-[#F09235] p-3 py-5 px-10 rounded-md text-white">TATUADORES</router-link>
  </div>
</section>

  <!-- FOTOS Y  FONDO BEIGE -->
  <section class="bg-[#F9EEDF] h-[200px] flex">
  <div class="p-5 w-full">
    <div class="flex m-10 justify-center">
      <div class="flex space-x-12">
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-1433273.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-2183131.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-6153346.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>



  <div class= "p-5 w-full">
    <div class="flex m-10 justify-center">
      <div class="flex space-x-12">
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-1803880.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7005727.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7147772.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

</section>



</header>

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