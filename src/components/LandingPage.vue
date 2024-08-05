<template>
  <div class="grid grid-cols-3 grid-rows-1 h-screen">
    <!-- Left side -->
    <div class="col-start-1 col-end-2 row-start-1">
      <img
        class="h-screen"
        src="../assets/landing-page/left-image.jpg"
        alt="woman with tattooed arm"
      />
    </div>
    <!-- Center section -->
    <div
      class="bg-black h-screen col-start-2 col-end-3 row-start-1 font-mont flex flex-col justify-center items-center"
    >
      <img
        class="h-32 w-32 mb-0 mt-20"
        src="../assets/landing-page/logo_larama_beige.png"
        alt="Logo de texto circular La Rama"
      />
      <h1
        class="text-[#F9EEDF] text-center flex justify-center items-center mt-60"
      >
        MEJORES TATUAJES & <br />TATUADORES DE BARCELONA
      </h1>
      <!-- Línea debajo de home configurada aquí como border de abajo. No sé cómo cambiar el tamaño -->
      <a
        href="link?"
        target="_blank"
        class="text-[#F09235] font-thin flex justify-center m-11 border-[#F09235]/100 border-b-4 border-solid pb-0 text-center"
        >home</a 
      >
    </div>
    <!-- Overlapping Center Image -->
    <div
      class="flex justify-center items-center col-start-1 col-end-4 row-start-1"
    >
      <img
        class="w-[45rem] h-120 opacity-25"
        src="../assets/landing-page/ilustracion.png"
        alt="center illustration"
      />
    </div>
    <!-- Right section -->
    <div class="col-start-3 col-end-4 row-start-1">
      <img
        class="h-screen"
        src="../assets/landing-page/right-image.jpg"
        alt="woman with several tattoos looking at camera"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing-page",
};
</script>

<style></style>
