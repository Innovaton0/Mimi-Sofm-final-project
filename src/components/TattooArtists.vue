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
    <main class="bg-[#F9EEDF] min-h-screen">
        <section class="flex flex-row justify-around md:justify-normal flex-wrap pt-20">
            <div class="md:w-36 text-white flex flex-wrap justify-evenly md:flex-col gap-1 md:gap-5 ps-5">
                <button @click="category = label" class="bg-black py-5 px-2 text-center" v-for="label in labels" :key="label.labels">{{ label }}</button>
            </div>
            <div v-for="(img, index) in images" :key="index" v-if="!category" class="bg-[rgb(249,238,223)] flex flex-row justify-around flex-auto pt-10 sm:pt-0 sm:gap-4">
                <img :src="img.image" :alt="img.alternative">
            </div>

           <div v-if="category" class="flex flex-wrap w-[400px] ms-16">
              <div v-for="(artist, index) in artists" @click="updateBigImage(artist.imageUrl)" :key="index" class="border-2 border-yellow-600">
              <img :src="artist.imageUrl" :alt="artist.name" v-if="artist.imageUrl" />
            </div>
           </div>

           <div v-if="bigImage" class="border-2 border-purple-700 ms-32 w-[30rem]">
            <img :src="bigImage" alt="">
            <p> Si quieres saber más de mí: <router-link to="/tattooartists/:id" class="underline">Click Aquí</router-link></p>
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
          labels: ["JAPONES", "FLORAL", "ILUTRACIÓN", "MINIMAL", "PURE BLACK"],
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