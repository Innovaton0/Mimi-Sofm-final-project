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

            <!-- BOTONES -->
            <div class="max-h-[30rem] md:w-36 text-white flex flex-wrap justify-evenly md:flex-col gap-1 md:gap-5 ps-5">
                <button 
                    @click="changeCategory(label)" 
                    class="bg-black hover:bg-[#F09235] py-5 px-2 text-center" 
                    v-for="label in labels" 
                    :key="label">
                    {{ label }}
                </button>
            </div>

            <!-- 3 IMÁGENES ESTÁNDAR -->
            <div 
                v-for="(img, index) in shuffledImages" 
                :key="index" 
                v-if="!category" 
                class="bg-[rgb(249,238,223)] flex flex-row justify-around flex-auto pt-10 sm:pt-0 sm:gap-4">
                <img :src="img.image" :alt="img.alternative">
            </div>

            <!-- GRID IMAGES -->
           <div v-if="category" class="w-[30rem] gap-2 flex flex-wrap ms-16">
              <div 
                  v-for="(artist, index) in shuffledArtists" 
                  @click="updateBigImage(artist.imageUrl)" 
                  :key="index">
                  <img 
                      class="w-40 h-40" 
                      :src="artist.imageUrl" 
                      :alt="artist.name" 
                      v-if="artist.imageUrl" />
              </div>
           </div>

           <!-- bigimage -->
           <div v-if="bigImage" class="ms-5 w-[30rem]">
            <img :src="bigImage" alt="">
            <p> Si quieres saber más de mí: <router-link :to="`/tattooartists/${getRandomId}`" class="underline">Click Aquí</router-link></p>
           </div>

        </section>
    </main>
    <Footer></Footer>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useArtistStore } from '../stores/ArtistStore.js';
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
            tattooStore.getTattooImages(query);
        },
        updateBigImage(imageUrl) {
            this.bigImage = imageUrl;
        },
        ...mapActions(useArtistStore, ['changeCategory']),

        // Método para barajar las imágenes
        shuffleImages(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },

        // Cambiar categoría y barajar imágenes
        changeCategory(label) {
            this.selectedCategory = label;
            this.shuffledImages = this.shuffleImages([...this.images]); // Barajar imágenes estándar
            this.shuffledArtists = this.shuffleImages([...this.artists]); // Barajar artistas

            this.updateCategory(label);
        },

        updateCategory(label) {
            // Lógica para cambiar de categoría
            // Se puede adaptar según la lógica existente en el store
            // Por ejemplo, filtrar artistas o imágenes específicas
            this.category = label;
        }
    },
    computed: {
        ...mapState(useArtistStore, ['artists', 'category', 'images']),
        getRandomId() {
            const min = Math.ceil(1);
            const max = Math.floor(30);
            return Math.floor(Math.random() * (max - min)) + 1;
        },
    },
    data() {
        return {
            labels: ["JAPONES", "FLORAL", "ILUSTRACIÓN", "MINIMAL", "PURE BLACK"],
            images: [
                { image: artist1, alternative: "male tattoo artist drawing on belly side" },
                { image: artist2, alternative: "female tattoo , tattooing on a hand" },
                { image: artist3, alternative: "male tattoo artist drawing on shoulder" }
            ],
            apiImages: [apiExample],
            bigImage: "",
            shuffledImages: [],
            shuffledArtists: [],
            selectedCategory: "",
        };
    },
    mounted() {
        // Inicializar las imágenes barajadas
        this.shuffledImages = this.shuffleImages([...this.images]);
        this.shuffledArtists = this.shuffleImages([...this.artists]);
    }
}
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
