<template>
  <div class="grid grid-cols-3 grid-rows-1">
    <!-- Left side -->
    <div class="h-screen col-start-1 col-end-2 row-start-1">
      <img
        class="h-full w-full object-cover"
        src="../assets/landing-page/left-image.jpg"
        alt="woman with tattooed arm"
      />
    </div>
    <!-- Center section -->
    <div
      class="bg-black col-start-2 col-end-3 row-start-1 font-mont flex flex-col justify-around items-center h-screen"
    >
      <img
        class="h-32 w-32"
        src="../assets/landing-page/logo_larama_beige.png"
        alt="Logo de texto circular La Rama"
      />
      <h1
        class="text-[#F9EEDF] text-center flex justify-evenly items-center"
      >
        MEJORES TATUAJES & <br />TATUADORES DE BARCELONA
      </h1>
      <!-- Línea debajo de home configurada aquí como border de abajo. No sé cómo cambiar el tamaño -->
      <router-link
        to="/home"
        class="text-[#F09235] font-thin flex justify-center border-[#F09235]/100 border-b-4 border-solid pb-0 text-center z-10"
        >home</router-link
      >
    </div>
    <!-- Overlapping Center Image -->
    <div
      class="flex justify-center items-center col-start-1 col-end-4 row-start-1"
    >
      <img
        class="w-[45rem] h-screen opacity-25"
        src="../assets/landing-page/ilustracion.png"
        alt="center illustration"
      />
    </div>
    <!-- Right section -->
    <div class="h-screen col-start-3 col-end-4 row-start-1">
      <img
        class="h-full w-full object-cover"
        src="../assets/landing-page/right-image.jpg"
        alt="woman with several tattoos looking at camera"
      />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Landing-page",
};
</script>

<style></style>
