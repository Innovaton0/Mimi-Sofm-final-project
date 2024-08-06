<template>
  <div class="font-mont">
    <Navbar></Navbar>
  <div id="app" class="bg-[#F9EEDF] h-full py-10 px-5">
    <div class="max-w-4xl mx-auto rounded-lg overflow-hidden">
      <div src="../assets/">
      </div>
      <div class="flex justify-start items-start p-4">
        <Search />
      </div>
      
      <!-- IMAGEN DE TATUADOR -->
      <div class="flex flex-row">
        <div class="border-r border-r-black pr-20">
      <p class="text-white bg-black text-2xl text-center font-semibold">Nicolás Kroft</p>

      <div>
        <div class="items-center">
          <div
            class="w-[300px] h-[400px]"
            :style="{ backgroundColor: randomColor() }"
          >
          </div>
        </div>
        </div>
      </div>


      <!-- biografía -->
        <div class="flex-1 pl-20">
          <div class="mb-4">
            <h3 class="text-[#F09235] text-3xl font-bold">BIO</h3>
            <p class="text-sm w-80 font-light text-black">
              Nicolás Kroft es un renombrado tatuador argentino nacido en Buenos
              Aires en 1985. Desde joven mostró talento artístico, aprendiendo
              dibujo y pintura de su abuelo. Comenzó como aprendiz en un estudio
              de tatuajes y en 2010, abrió su propio estudio, Ink & Soul,
              ganando reconocimiento por sus retratos. Nicolás ha ganado premios
              en convenciones internacionales y es conocido por su atención al
              detalle y su habilidad para crear diseños personalizados. También
              es un defensor activo de la protección animal, organizando eventos
              benéficos para apoyar refugios.
            </p>
          </div>

          <div class="mb-4">
            <h3 class="text-[#F09235] text-3xl font-bold">RRSS</h3>
            <p class="text-sm font-light text-black">@nicokroft @inkandsoul_</p>
          </div>

          <div>
            <h3 class="text-[#F09235] text-3xl font-bold">CONTACTO</h3>
            <p class="text-sm font-light text-black">nicolaskroft@inksoul.com</p>
          </div>
        </div>
      </div>

      <div class="w-[600px] gap-5 grid grid-cols-2 mt-16">
        <div
          v-for="n in 4"
          :key="n"
          class="w-72 h-72"
          :style="{ backgroundColor: randomColor() }"
        >
          <!-- Bloques de color aleatorio para los tatuajes -->
        </div>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import Search from "./Search.vue";

export default {
  name: "App",
  components: { Search, Navbar, Footer },
  methods: {
    randomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};

</script>

<style>
.pb-full {
  padding-bottom: 100%;
}
</style>
