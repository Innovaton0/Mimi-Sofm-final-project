<template>
  <Navbar></Navbar>
  <Search></Search>

  <!-- Buttons -->
  <div class="grid grid-cols-5 py-10 justify-items-center"> 
    <div>
      <button class="bg-black text-white w-48 p-1 hover:bg-[#651c19] active:bg-[#F09235]">JAPONES</button>
    </div>
    <div>
      <button class="bg-black text-white w-48 p-1 hover:bg-[#651c19] active:bg-[#F09235]">FLORAL</button>
    </div>
    <div>
      <button class="bg-black text-white w-48 p-1 hover:bg-[#651c19] active:bg-[#F09235]">ILUSTRACIONES</button>
    </div>
    <div>
      <button class="bg-black text-white w-48 p-1 hover:bg-[#651c19] active:bg-[#F09235]">MINIMAL</button>
    </div>
    <div>
      <button class="bg-black text-white w-48 p-1 hover:bg-[#651c19] active:bg-[#F09235]">PURE BLACK</button>
    </div>
  </div>


  <!-- Grid images -->
  <div v-if="images" class="flex flex-wrap gap-3 mx-6 pb-10">
    <div v-for="(image, index) in images" @click="updateBigImage(image.src.medium)" :key="index" class="flex-[2_2_200px]">
      <img :src="image.src.medium" alt="tattoo" v-if="image.src.medium" class="cursor-pointer w-[100%] h-[150px] object-cover"/>
    </div>
  </div>

  <!-- Modal Image -->
  <transition name="transition">
  <div v-if="modalImage" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div @click.stop class="bg-white p-8 shadow-2xl w-[54rem] flex justify-center gap-4">
      <div class="py-2">
        <div class="text-sm flex items-center justify-end gap-1 mb-1">
          <p>Guardar como favorito</p><i class="fa-solid fa-heart hover:text-[#F09235] active:text-[#F09235]"></i>
        </div>
        <img :src="modalImage" class="w-full h-auto"/>
      </div>

      <div class="flex flex-col items-center w-[21rem] px-2 justify-around border-l border-l-black">
        <p class="text-center text-2xl">Conoce al <router-link to="/tattooartists" class="font-bold text-[#F09235] hover:text-[#651c19]">artista</router-link> que hizo esta tatuaje</p>
        <router-link to="/tattooartists">
            <img
            src="../assets/Tatuajes Home/pexels-photo-1433273.png"
            alt="Imagen Redonda"
            class="w-40 h-40 rounded-full object-cover"
            /> 
          </router-link>
        <ul class="flex gap-4">
          <li><a href="https://www.facebook.com/CodeOp.tech" target="_blank"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
          <li><a href="https://www.instagram.com/_codeop/?hl=en" target="_blank"><i class="fa-brands fa-instagram fa-2xl"></i></a></li>
          <li><a href="https://www.linkedin.com/school/codeop/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
        </ul>
      </div>
      <button @click="closeModal" class="px-2 h-9 font-light bg-black text-sm text-white hover:bg-[#651c19]">X</button>
    </div>
    </div>
  </transition>
  
  <Footer></Footer>
</template>
    
<script>
import Navbar from './Navbar.vue';
import Search from './Search.vue';
import Footer from './Footer.vue';
import { mapState } from 'pinia'
import { useTattooStore } from '../stores/TattooStore.js'

export default {
  name: "TattooPage2",
  components: { Search, Navbar, Footer },
  data() {
    return {
      modalImage: "",
    };
  },

  computed: {
  ...mapState(useTattooStore, ['images'])
  },

  methods: {
    updateBigImage(src) {
      this.modalImage = src;
    },
    closeModal() {
      this.modalImage = "";
    }
  },
}
</script>

<style>
.transition-enter-active, .transition-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.transition-enter, .transition-leave-to /* .transition-leave-active en <2.1.8 */ {
  opacity: 0;
  transform: scale(0.95);
}
</style>