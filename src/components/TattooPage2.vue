<template>
  <Navbar></Navbar>
  <Search></Search>

  <!-- Buttons -->
  <div class="grid grid-cols-5 py-8 justify-items-center"> 
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


  <!-- Grid imgs -->
    <div v-if="images" class="flex flex-wrap gap-3 mx-6 pb-8">
      <div v-for="(image, index) in images" :key="index" class="flex-[2_2_200px]">
        <img :src="image.src.medium" class="w-[100%] h-[150px] object-cover"/>
      </div>
    </div> 
    
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
        computed: {
  ...mapState(useTattooStore, ['images'])
},
        data() {
        return {

        }
    }
    }
</script>