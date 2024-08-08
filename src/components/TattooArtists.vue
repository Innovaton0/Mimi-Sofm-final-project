<template>
    <header class="bg-[#F9EEDF] grid grid-cols-3 grid-rows-2 h-60 sm:h-68">
        <Navbar class="col-start-1 col-end-4 row-start-1 mt-5"></Navbar>

        <div class="col-start-1 col-end-4 md:col-end-3 row-start-2 flex items-start lg:items-end mx-5 lg:ms-20 z-10 translate-y-6">
            <Search class="w-full"></Search>
        </div>
        <div class="col-start-2 lg:col-start-3 col-end-4 row-start-1 row-end-3 flex justify-end">
            <img v-if="!category" class="w-[30rem] h-[30rem] -translate-y-32" src="../assets/tattooArtistsImages/tattoo-tool2.png" alt="tattoo-tool">
            <img v-if="category" class="h-[66rem]" src="../assets/bg-image-ornament-full.png" alt="">
        </div>
    </header>

    
    <main class="bg-[#F9EEDF] min-h-[80vh]">
        <section class="mb-2 flex flex-row ms-4 lg:justify-normal flex-wrap pt-20">

            <!-- BOTONES -->
            <div class="z-10 max-h-[30rem] text-white flex flex-wrap justify-evenly lg:flex-col gap-1 lg:gap-5 xl:ps-5">
                <button @click="(label) => changeCategory(label)" class="bg-black hover:bg-[#F09235] h-12 px-2 text-center" 
                v-for="label in labels" :key="label.labels">{{ label }}</button>
            </div>

            <!-- 3 IMÁGENES ESTÁNDAR -->
            <div v-for="(img, index) in images" :key="index" v-if="!category" class="bg-[rgb(249,238,223)] flex flex-row justify-around flex-auto pt-10 sm:pt-0 sm:gap-4">
                <img :src="img.image" :alt="img.alternative">
            </div>

            <!-- GRID IMAGES -->
           <div v-if="category" class="md:w-[30rem] xl:w-[40rem] gap-2 flex flex-col md:flex-row flex-wrap md:mt-2 mt-20 lg:ms-10">
              <div v-for="(artist, index) in artists" @click="updateBigImage(artist.imageUrl)" :key="index">
              <img class="w-32 h-32 md:w-40 md:h-40" :src="artist.imageUrl" :alt="artist.name" v-if="artist.imageUrl" />
            </div>
           </div>

           <!-- bigimage -->
           <div v-if="bigImage" class="fixed ms-5 w-[20rem] lg:w-[30rem] flex flex-col translate-x-28  -translate-y-28 lg:-translate-y-0 sm:translate-x-[10rem] md:translate-x-[22rem] lg:translate-x-[30rem] xl:translate-x-[45rem]">
            <img class="w-full h-80" :src="bigImage" alt="">
            <p class="bg-black p-4 text-white"> Si quieres saber más de mí: <router-link :to="`/tattooartists/${getRandomId}`" class="underline text-[#F09235]">Click Aquí</router-link></p>
            
           </div>

        </section>
    </main>
    <Footer>
    </Footer>
</template>
    
<script>
import { mapState, mapActions } from 'pinia'
import { useArtistStore } from '../stores/ArtistStore.js'
import artist1 from '../assets/tattooArtistsImages/artist1.png';
import artist2 from '../assets/tattooArtistsImages/artist2.png';
import artist3 from '../assets/tattooArtistsImages/artist3.png';
import apiExample from "../assets/tattooArtistsImages/api-example.png";
import Search from './Search.vue';
import Footer from "./Footer.vue";
import Navbar from './Navbar.vue';

    export default {
        name: "TattooArtists",
        components: { Search, Footer, Navbar },
        methods: {
            fetchImages(query) {
      const tattooStore = useTattooStore(); 

      tattooStore.getTattooImages(query); },
      
        updateBigImage(imageUrl) {
            this.bigImage = imageUrl;
        },
        ...mapActions(useArtistStore, ['changeCategory'])
  },
        computed: {
         ...mapState(useArtistStore, ['artists', "category", 'images']),
         
        getRandomId() {
            const min = Math.ceil(1)
             const max = Math.floor(30)

      return Math.floor(Math.random()*(max-min)) +1
    },

        },
      

        
        data() {
        return {
          labels: ["JAPONES", "FLORAL", "ILUSTRACIÓN", "MINIMAL", "PURE BLACK"],
          images: [{image: artist1 , alternative: "male tattoo artist drawing on belly side"},
          {image: artist2 , alternative: "female tattoo , tattooing on a hand"},
          {image: artist3 , alternative: "male tattoo artist drawing on shoulder"}
          ],
          apiImages: [apiExample],
          bigImage: ""
        }
    }
    }
</script>
