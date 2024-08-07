<template>
  <Navbar></Navbar>
  <Search></Search>

  <div class="grid grid-cols-5 gap-4 text-white my-20 mx-5">
    <!-- JAPONES -->
    <RouterLink to="/tattoo2"><div>
      <img
        src="../assets/TattooPage/Japonés.jpg"
        alt="Torso con tatuaje de estilo japonés en brazos y pectoral"
      />
        <button class="bg-black w-full">JAPONES</button>
    </div></RouterLink>

    <!-- FLORAL -->
    <RouterLink to="/tattoo2"><div>
      <img
        src="../assets/TattooPage/Floral.jpg"
        alt="Torso mujer con tatuajes florales en los costados"
      />
      <button class="bg-black w-full">FLORAL</button>
    </div></RouterLink>

    <!-- ILUSTRACIONES -->
    <RouterLink to="/tattoo2"><div>
      <img
        src="../assets/TattooPage/Ilustraciones.jpg"
        alt="antebrazos con tatuajes coloridos ilustraciones"
      />
      <button class="bg-black w-full">ILUSTRACIONES</button>
    </div></RouterLink>

    <!-- MINIMAL -->
    <RouterLink to="/tattoo2"><div>
      <img
        src="../assets/TattooPage/Minimal.jpg"
        alt="Tatuaje líneas minimalistas de sol con luna sobrepuesta en tobillo"
      />
      <button class="bg-black w-full">MINIMAL</button>
    </div></RouterLink>

    <!-- PURE BLACK -->
    <RouterLink to="/tattoo2"><div>
      <img
        src="../assets/TattooPage/PureBlack.jpg"
        alt="Tatuaje color negro con patron floral sobre hombro, brazo y pectoral"
      />
      <button class="bg-black w-full">PURE BLACK</button>
    </div></RouterLink>
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
