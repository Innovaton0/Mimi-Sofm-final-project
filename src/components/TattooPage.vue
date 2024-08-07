<template>
  <Navbar></Navbar>

  <!-- Aquí va navbar -->
  <Search></Search>

  <div class="grid grid-cols-5 justify-between justify-items-center space-x-4 text-white my-20 mx-5">
    <!-- JAPONES -->
    <div class="col-start-1 col-end-2 border border-black">
      <img
        src="../assets/TattooPage/Japones.jpg"
        alt="Torso con tatuaje de estilo japonés en brazos y pectoral"
      />
      <button class="bg-black w-full">JAPONES</button>
    </div>

    <!-- FLORAL -->
    <div class="overflow-hidden col-start-2 col-end-3 border border-red-700">
      <img 
        src="../assets/TattooPage/Floral.jpg"
        alt="Torso mujer con tatuajes florales en los costados"
        />
      <button class="bg-black w-full">FLORAL</button>
    </div>

    <!-- ILUSTRACIONES -->
    <div class="col-start-3 col-end-4">
      <img
        src="../assets/TattooPage/Ilustraciones.jpg"
        alt="antebrazos con tatuajes coloridos ilustraciones"/>
      <button class="bg-black w-full">ILUSTRACIONES</button>
    </div>

    <!-- MINIMAL -->
    <div class="col-start-4 col-end-5">
      <img 
      src="../assets/TattooPage/Minimal.jpg"
      alt="Tatuaje líneas minimalistas de sol con luna sobrepuesta en tobillo"
      />
      <button class="bg-black w-full">MINIMAL</button>
    </div>

    <!-- PURE BLACK -->
    <div class="col-start-5 col-end-6">
      <img
      src="../assets/TattooPage/Pure Black.jpg"
      alt="Tatuaje color negro con patron floral sobre hombro, brazo y pectoral"/>
      <button class="bg-black w-full">PURE BLACK</button>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import Search from "./Search.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "TattooPage",
  components: { Search, Footer, Navbar },
  data() {
    return {};
  },
};
</script>
