<template>
  <Navbar></Navbar>
  <section
    class="bg-[#F9EEDF] font-mont text-black flex items-center justify-center py-12"
  >
    <!-- BOXS -->
    <div class="grid grid-cols-3 gap-10 max-w-[130rem] p-5">
      <!-- BOX 1 -->
      <div class="flex flex-col items-center justify-self-end gap-6">
        <div
          class="bg-white rounded-2xl flex flex-col items-start justify-between p-6 h-[320px] max-w-[240px] shadow-lg"
        >
          <ul class="flex flex-col gap-5 pb-5">
            <h2
              class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4"
            >
              Suscripción Basic
            </h2>
            <li>· Publicaciones</li>
            <li>· Newsletter</li>
            <li>· Difusión en Web</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800 w-[180px]">
            <span class="font-extrabold text-2xl pt-2">15€</span>
          </div>
        </div>
        <div>
          <router-link
            to="/register"
            tag="button"
            class="bg-black text-white font-bold py-2 px-16 rounded-xl text-sm hover:bg-[#F09235] focus:outline-none focus:ring-2 uppercase"
            >Suscríbete</router-link
          >
        </div>
      </div>

      <!-- BOX 2 -->
      <div class="flex flex-col items-center gap-6">
        <div
          class="bg-white rounded-2xl flex flex-col items-start justify-between p-6 h-[320px] w-[240px] shadow-lg"
        >
          <ul class="flex flex-col gap-4 pb-5">
            <h2
              class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4"
            >
              Suscripción PRO
            </h2>
            <li>· Publicaciones</li>
            <li>· Newsletter</li>
            <li>· Difusión en Web</li>
            <li>· Foro participativo</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800 w-[180px]">
            <span class="font-extrabold text-2xl pt-2">30€</span>
          </div>
        </div>
        <div>
          <router-link
            to="/register"
            tag="button"
            class="bg-black text-white font-bold py-2 px-16 rounded-xl text-sm hover:bg-[#F09235] focus:outline-none focus:ring-2 uppercase"
            >Suscríbete</router-link
          >
        </div>
      </div>

      <!-- BOX3 -->
      <div class="flex flex-col items-center justify-self-start gap-6">
        <div
          class="bg-white rounded-2xl flex flex-col items-start justify-between p-6 h-[320px] w-[240px] shadow-lg"
        >
          <ul class="flex flex-col gap-3 pb-5">
            <h2
              class="uppercase text-lg font-extrabold tracking-tight leading-4 border-b-2 border-b-gray-800 pb-3"
            >
              Suscripción Premium
            </h2>
            <li>· Publicaciones y Foro</li>
            <li>· Newsletter</li>
            <li>· Difusión en Redes Sociales y Web</li>
            <li>· Artista Destacado</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800 w-[180px]">
            <span class="font-extrabold text-2xl pt-2">60€</span>
          </div>
        </div>
        <div>
          <router-link
            to="/register"
            tag="button"
            class="bg-black text-white font-bold py-2 px-16 rounded-xl text-sm hover:bg-[#F09235] focus:outline-none focus:ring-2 uppercase"
            >Suscríbete</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
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
