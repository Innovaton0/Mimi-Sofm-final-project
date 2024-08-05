<template>
    <header class="bg-[#F9EEDF] grid grid-cols-3 grid-rows-2 h-60 sm:h-68">
        <div class="col-start-1 col-end-4 row-start-1 row-end-1 z-10">
            NAVBAR</div>

        <div class="col-start-1 col-end-4 md:col-end-3 row-start-2 flex items-start lg:items-end mx-5 lg:ms-20 z-10 translate-y-6">
            <Search></Search>
        </div>
        <div class="col-start-2 lg:col-start-3 col-end-4 row-start-1 row-end-3 flex justify-end">
            <img v-if="!category" class="w-[30rem] h-[30rem] -translate-y-32" src="../assets/tattooArtistsImages/tattoo-tool2.png" alt="tattoo-tool">
            <img v-if="category" class="h-[66rem]" src="../assets/tattooArtistsImages/tattoo-artist-big.png" alt="">
        </div>
    </header>
    <main class="bg-[#F9EEDF] h-screen">
        
        <section class="flex flex-row justify-around md:justify-normal flex-wrap pt-20">
            <div class="md:w-36 text-white flex flex-wrap justify-evenly md:flex-col gap-1 md:gap-5 ps-5">
                <button @click="category = label" class="bg-black py-5 px-2 text-center" v-for="label in labels" :key="label.labels">{{ label }}</button>
            </div>
            <div v-for="(img, index) in images" :key="index" v-if="!category" class="bg-[rgb(249,238,223)] flex flex-row justify-around flex-auto pt-10 sm:pt-0 sm:gap-4">
                <img :src="img.image" :alt="img.alternative">
            </div>
           <div v-if="category" class="w-[50rem] ms-16">
              <div v-for="(mediumImg, index) in apiImages" @click="bigImage = mediumImg" :key="index" class="border-2 border-yellow-600">{{mediumImg}}</div>
           </div>
           <div v-if="bigImage" class="border-2 border-purple-700 ms-32 w-[30rem]">
            <img src="" alt="">
            <p>qqhwfhqjgw <router-link to="/tattooartists/:id" class="underline">Click Aquí</router-link></p>
           </div>
        </section>
    </main>
</template>
    
<script>
import artist1 from '../assets/tattooArtistsImages/artist1.png';
import artist2 from '../assets/tattooArtistsImages/artist2.png';
import artist3 from '../assets/tattooArtistsImages/artist3.png';
import apiExample from "../assets/tattooArtistsImages/api-example.png";
    export default {
        name: "TattooArtists",
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