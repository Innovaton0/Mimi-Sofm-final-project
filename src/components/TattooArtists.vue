<template>
    <header class="bg-[#F9EEDF] grid grid-cols-3 grid-rows-2 h-60 sm:h-68">
        <div class="col-start-1 col-end-4 row-start-1 row-end-1 z-10">
            NAVBAR</div>

        <div class="col-start-1 col-end-4 md:col-end-3 row-start-2 flex items-start lg:items-end mx-5 lg:ms-20 z-10 translate-y-6">search bar
         <!-- <label for="search" class="font-bold bg-black text-white text-center py-2 px-5 sm:px-10">CATEGORÍAS
         </label>
         <input class="w-[50rem] p-2" id="search" placeholder="Busca aquí" type="text"> -->
        </div>
        <div class="col-start-2 lg:col-start-3 col-end-4 row-start-1 row-end-3 flex justify-end">
            <img class="w-[30rem] h-[30rem] -translate-y-32" src="../assets/tattooArtistsImages/tattoo-tool2.png" alt="tattoo-tool">
        </div>
    </header>
    <main class="bg-[#F9EEDF] h-screen">
        
        <section class="bg-[rgb(249,238,223)] pt-20 flex flex-row flex-wrap justify-around px-20 gap-20">
            <ul class="w-36 text-white flex flex-col gap-5">
                <li class="bg-black py-5 text-center" v-for="label in labels" :key="label.labels">{{ label }}</li>
            </ul>
            <div v-for="(img, index) in images" :key="index" class="flex-auto">
                <img :src="img.image" :alt="img.alternative">
            </div>
           
        </section>
    </main>
</template>
    
<script>
import artist1 from '../assets/tattooArtistsImages/artist1.png';
import artist2 from '../assets/tattooArtistsImages/artist2.png';
import artist3 from '../assets/tattooArtistsImages/artist3.png';
    export default {
        name: "TattooArtists",
        data() {
        return {
          labels: ["JAPONES", "FLORAL", "ILUTRACIÓN", "MINIMAL", "PURE BLACK"],
          images: [{image: artist1 , alternative: "male tattoo artist drawing on belly side"},
          {image: artist2 , alternative: "female tattoo , tattooing on a hand"},
          {image: artist3 , alternative: "male tattoo artist drawing on shoulder"}
          ]
        }
    }
    }
</script>