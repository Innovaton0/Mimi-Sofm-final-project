<template>

  <main class=" grid grid-cols-3 grid-rows-3 h-[150vh]">
    <div class="col-start-1 col-end-4 row-start-1 row-end-1 z-20">
    <Navbar></Navbar>
  </div>
  <section class="col-start-1 col-end-4 row-start-1 row-end-4 z-10 flex justify-end h-full">
    <img class="h-screen" src="../assets/bg-image-tattoo.png" alt="ornament">
  </section>
  <!-- BOXS -->
    <section class="col-start-1 col-end-4 row-start-2 row-end-4 bg-[#F9EEDF] font-mont text-black flex justify-around flex-wrap md:flex-nowrap -mt-10 md:-mt-0 gap-2 md:gap-0"> 
        <!-- BOX 1 -->
        <div class="flex flex-col items-center gap-2 md:gap-6 md:h-[35rem] z-10 sm:w-80">
        <div class="w-full h-full bg-white rounded-2xl flex flex-col justify-between p-6 shadow-lg">
          <ul class="flex flex-col md:gap-10">
            <h2 class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4 text-center">Suscripción Basic</h2>
            <li class="list-disc list-inside">Publicaciones</li>
            <li class="list-disc list-inside">Newsletter</li>
            <li class="list-disc list-inside">Difusión en Web</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800">
            <span class="font-extrabold text-2xl pt-2">15€</span>
          </div>
        </div>
          <router-link to="/register" tag="button" class="bg-black text-center text-white font-bold py-4 w-full rounded-xl text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 uppercase">Suscríbete</router-link>
      </div>

        <!-- BOX 2 -->
        <div class="flex flex-col items-center gap-2 md:gap-6 md:h-[35rem] z-10 sm:w-80">
        <div class="w-full h-full bg-white rounded-2xl flex flex-col justify-between p-6 shadow-lg">
          <ul class="flex flex-col md:gap-10">
            <h2 class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4 text-center">Suscripción PRO</h2>
            <li class="list-disc list-inside">Publicaciones</li>
            <li class="list-disc list-inside">Newsletter</li>
            <li class="list-disc list-inside">Difusión en Web</li>
            <li class="list-disc list-inside">Foro participativo</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800 w-[180px]">
            <span class="font-extrabold text-2xl pt-2">30€</span>
          </div>
        </div>
          <router-link to="/register" tag="button" class="bg-black text-center text-white font-bold py-4 w-full rounded-xl text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 uppercase">Suscríbete</router-link>
      </div>

        <!-- BOX3 -->
        <div class="flex flex-col items-center gap-2 md:gap-6 md:h-[35rem] z-10 sm:w-80">
        <div class="w-full h-full bg-white rounded-2xl flex flex-col justify-between p-6 shadow-lg">
          <ul class="flex flex-col md:gap-10">
            <h2 class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4 text-center">Suscripción Premium</h2>
            <li class="list-disc list-inside">Publicaciones y Foro</li>
            <li class="list-disc list-inside">Newsletter</li>
            <li class="list-disc list-inside">Difusión en Redes Sociales y Web</li>
            <li class="list-disc list-inside">Artista Destacado</li>

          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800">
            <span class="font-extrabold text-2xl pt-2">60€</span>
          </div>
        </div>
          <router-link to="/register" tag="button" class="bg-black text-center text-white font-bold py-4 w-full rounded-xl text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 uppercase">Suscríbete</router-link>
      </div>
    </section>
  </main>
    <Footer class="mt-5"></Footer>
  </template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "JoinUs",
  components: { Navbar, Footer },
  data() {
    return {};
  },
};
</script>

<styles></styles>
