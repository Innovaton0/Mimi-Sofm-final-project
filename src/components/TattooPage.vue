<template>
  <header>
    <div class="flex justify-end">
      <img class="absolute translate-x-24 -translate-y-40 -z-10"src="../assets/tattooArtistsImages/tattoo-tool2.png" alt="tattoo tool">
    </div>
    <Navbar></Navbar>
  <div class="mt-32  ms-4 md:ms-10 2xl:ms-32 mb-2">
   <Search></Search>
  </div>
  </header>
  <div class=" text-white mx-5 flex justify-evenly items-center gap-2 flex-wrap min-h-[68vh] pb-2">
    <!-- JAPONES -->
    <RouterLink to="/tattoo2">
      <img
        src="../assets/TattooPage/Japonés.jpg"
        alt="Torso con tatuaje de estilo japonés en brazos y pectoral"
      />
        <button class="bg-black w-full">JAPONES</button>
    </RouterLink>

    <!-- FLORAL -->
    <RouterLink to="/tattoo2">
      <img
        src="../assets/TattooPage/Floral.jpg"
        alt="Torso mujer con tatuajes florales en los costados"
      />
      <button class="bg-black w-full">FLORAL</button>
    </RouterLink>

    <!-- ILUSTRACIONES -->
    <RouterLink to="/tattoo2">
      <img
        src="../assets/TattooPage/Ilustraciones.jpg"
        alt="antebrazos con tatuajes coloridos ilustraciones"
      />
      <button class="bg-black w-full">ILUSTRACIONES</button>
    </RouterLink>

    <!-- MINIMAL -->
    <RouterLink to="/tattoo2">
      <img
        src="../assets/TattooPage/Minimal.jpg"
        alt="Tatuaje líneas minimalistas de sol con luna sobrepuesta en tobillo"
      />
      <button class="bg-black w-full">MINIMAL</button>
    </RouterLink>

    <!-- PURE BLACK -->
    <RouterLink to="/tattoo2">
      <img
        src="../assets/TattooPage/PureBlack.jpg"
        alt="Tatuaje color negro con patron floral sobre hombro, brazo y pectoral"
      />
      <button class="bg-black w-full">PURE BLACK</button>
  </RouterLink>
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
