<template>
  <main class="min-h-screen">
    <div class="flex justify-end">
      <img class="absolute -z-10 translate-x-40 md:translate-x-80"src="../assets/bg-image-ornament-full.png" alt="tattoo ornament">
    </div>
    <Navbar></Navbar>
    
      <div class="flex flex-col items-center mx-auto rounded-lg overflow-hidden">
        <div src="../assets/">
        </div>
        <div class="flex justify-start items-start p-4">
          <Search/>
        </div>

        <!-- IMAGEN DE TATUADOR -->
        <div class="flex flex-row flex-wrap gap-4 justify-center md:justify-start">
          <div class="border-b md:border-b-0 border-b-black pb-10 md:border-r md:border-r-black md:pr-20">
            <p class="text-white bg-black text-2xl text-center font-semibold">Nicolás Kroft</p>

            <div>
              <div class="items-center">
                <div class="w-[300px] h-[400px] bg-cover bg-center"
                  :style="{ backgroundImage: `url(${tattooArtistPhoto})` }">
                  <!-- Imagen del tatuador -->
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

            <!-- RRSS -->
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

        <!-- IMÁGENES DE TATUAJES -->
        <div class="gap-5 mt-16 flex flex-col sm:flex-row sm:flex-wrap max-w-[40rem] md:-ms-40">
          <div
            v-for="(photo, index) in tattooPhotos"
            :key="index"
            class="w-72 h-72 bg-cover bg-center mb-4"
            :style="{ backgroundImage: `url(${photo})` }">
            <!-- Imágenes de tatuajes -->
          </div>
        </div>
      </div>
  
  </main>
    <Footer></Footer>
</template>

<script>
import Navbar from './Navbar.vue';
import Search from './Search.vue';
import Footer from './Footer.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: { Navbar, Search, Footer },
  data() {
    return {
      tattooArtistPhoto: '', // Para almacenar la imagen del tatuador
      tattooPhotos: [] // Para almacenar las imágenes de tatuajes
    };
  },
  methods: {
    async fetchTattooArtistPhoto() {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV'
          },
          params: {
            query: 'tattoo artist', // Aquí puedes personalizar el nombre del tatuador si tienes uno específico
            per_page: 10 // Obtener varias imágenes para mezclar
          }
        });
        const photos = response.data.photos;
        if (photos.length > 0) {
          this.tattooArtistPhoto = this.getRandomPhotos(photos.map(photo => photo.src.large), 1)[0]; // Selecciona una foto al azar
        }
      } catch (error) {
        console.error('Error fetching tattoo artist photo:', error);
      }
    },
    async fetchTattooPhotos() {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV'
          },
          params: {
            query: 'tattoo',
            per_page: 30 // Cambiado a 30 para obtener 30 imágenes
          }
        });
        const photos = response.data.photos;
        const allPhotos = photos.map(photo => photo.src.large); // Guarda las URLs de las imágenes
        this.tattooPhotos = this.getRandomPhotos(allPhotos, 4); // Obtén 4 fotos aleatorias
      } catch (error) {
        console.error('Error fetching tattoo photos:', error);
      }
    },
    getRandomPhotos(photos, count) {
      const shuffledPhotos = photos.sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente las fotos
      return shuffledPhotos.slice(0, count); // Selecciona las primeras 'count' fotos
    }
  },
  mounted() {
    this.fetchTattooArtistPhoto(); 
    // Llama a la función al montar el componente
    
    this.fetchTattooPhotos(); 
    // Llama a la función al montar el componente
  }
};
</script>

<style>
.pb-full {
  padding-bottom: 100%;
}
</style>
