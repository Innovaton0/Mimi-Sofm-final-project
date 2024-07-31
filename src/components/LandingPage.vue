<template>
  <div class="grid grid-cols-3 grid-rows-1 h-screen">
    <!-- Left side -->
    <div class="col-start-1 col-end-2 row-start-1">
      <img
        class="h-screen"
        src="../images/landing-page/left-image.jpg"
        alt="woman with tattooed arm"
      />
    </div>

    <!-- Center section -->
    <div class="bg-black h-screen col-start-2 col-end-3 row-start-1">
      <h1
        class="text-[#F9EEDF] text-center flex justify-center items-center mt-96"
      >
        MEJORES TATUAJES & <br />TATUADORES DE BARCELONA
      </h1>
      <a
        href="link?"
        target="_blank"
        class="text-[#F09235] font-thin flex justify-center m-11"
        >home</a
      >
    </div>
    <div
      class="flex justify-center items-center col-start-1 col-end-4 row-start-1"
    >
      <img
        class="w-[45rem] h-120 opacity-25"
        src="../images/landing-page/ilustracion.png"
        alt="center illustration"
      />
    </div>

    <!-- Right section -->
    <div class="col-start-3 col-end-4 row-start-1">
      <img
        class="h-screen"
        src="../images/landing-page/right-image.jpg"
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
