<template>
    <header class="bg-[#F9EEDF] grid grid-cols-3 grid-rows-2 h-60 sm:h-68">
        <Navbar class="col-start-1 col-end-4 row-start-1 mt-5"></Navbar>

        <div class="col-start-1 col-end-4 md:col-end-3 row-start-2 flex items-start lg:items-end mx-5 lg:ms-20 z-10 translate-y-6">
            <Search></Search>
        </div>
        <div class="col-start-2 lg:col-start-3 col-end-4 row-start-1 row-end-3 flex justify-end">
            <img v-if="!category" class="w-[30rem] h-[30rem] -translate-y-32" src="../assets/tattooArtistsImages/tattoo-tool2.png" alt="tattoo-tool">
            <img v-if="category" class="h-[66rem]" src="../assets/tattooArtistsImages/tattoo-artist-big.png" alt="">
        </div>
    </header>
    <main class="bg-[#F9EEDF] h-screen">
        <section class="flex flex-row justify-around md:justify-normal flex-wrap pt-20 ">
            <div class="md:w-36 text-white flex flex-wrap justify-evenly md:flex-col gap-1 md:gap-5 ps-5 border-2">
            <button v-for="button in buttons" :key="button.query" @click="fetchImages(button.query)" class="bg-black text-white text-sm h-24 hover:bg-[#651c19] focus:bg-[#F09235]">{{ button.label }} </button>
            </div>

            <!-- 1 pag -->
            <div v-for="(img, index) in images" :key="index" v-if="!category" class="bg-[rgb(249,238,223)] flex flex-row justify-around flex-auto pt-10 sm:pt-0 sm:gap-4">
                <img :src="img.image" :alt="img.alternative">
            </div>

                <!-- 2 pag -->
           <div v-if="category" class="flex gap-2 w-[600px] ms-16 ">
              <div v-for="(artist, index) in artists" @click="updateBigImage(artist.imageUrl)" :key="index" class=""><img :src="artist.imageUrl" :alt="artist.name" v-if="artist.imageUrl" /></div>
           </div>
           <div v-if="bigImage" class="ms-32 w-[30rem]">
            <img :src="bigImage" alt="">
            <div class="flex flex-col bg-black text-white justify-center items-center p-4">
                <p class="text-xl">Nicolás Kroft - 10 años de experiencia</p>
                <p> Si quieres saber más: <router-link to="/tattooartists/:id" class="font-bold px-2 text-[#F09235] hover:text-[#ffb66c] focus:text-[#ffb66c]"> Click Aquí </router-link></p>
           </div>
        </div>
        </section>
    </main>
    <Footer>
    </Footer>
</template>
    
<script>
import { mapState } from 'pinia'
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
    updateBigImage(imageUrl) {
      this.bigImage = imageUrl;
    }
  },
        computed: {
         ...mapState(useArtistStore, ['artists'])
        },

        data() {
        return {
        buttons: [
        { label: "JAPONES", query: "tattoos" },
        { label: "FLORAL", query: "tattooing" },
        { label: "ILUSTRACIONES", query: "tattoing" },
        { label: "MINIMAL", query: "tattoo art" },
        { label: "PURE BLACK", query: "tattoo" }
      ],
          images: [{image: artist1 , alternative: "male tattoo artist drawing on belly side"},
          {image: artist2 , alternative: "female tattoo , tattooing on a hand"},
          {image: artist3 , alternative: "male tattoo artist drawing on shoulder"}
          ],
          apiImages: [apiExample],
          category: "",
          bigImage: ""
        }
    }
    }
</script>