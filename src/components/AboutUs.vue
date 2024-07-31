<template>

<section class="bg-[#F9EEDF] h-[100rem]"> 
  <h1 class="text-center p-16"> Aquí va el navbar</h1>

  <p class="font-bold underline decoration-[rgb(240,146,53)] decoration-[6px] text-2xl m-10">NOSOTROS</p>

  <div class="flex justify-center items-center space-x-20">
   <!-- MATEUS -->
    <img
      src="../assets/Nosotros/T06SBAM50LR-U070HGSUD0C-90cde90c6623-512.png"
      alt="Mateus"
      class="w-32 h-32 rounded-full object-cover"
    />

    <!-- MARIANTO -->
    <img
      src="../assets/Nosotros/T06SBAM50LR-U071B5MU0L8-f736a6aa7cee-512.jpg"
      alt="Marianto"
      class="w-32 h-32 rounded-full object-cover"
    />

    <!-- INNO -->
    <img
      src="../assets/Nosotros/innp.png"
      alt="Inno"
      class="w-32 h-32 rounded-full object-cover"
    />

    <!-- NACHA -->
    <img
      src="../assets/Nosotros/IMG_7723.png"
      alt="Nacha"
      class="w-32 h-32 rounded-full object-cover"
    />
   
  </div>

<div class="flex justify-center space-x-40">
  <div>
     <p class="font-light">Mateus</p>
  </div>

  <div>
     <p class="font-light">Marianto</p>
  </div>

  <div>
     <p class="font-light">Inno</p>
  </div>

  <div>
     <p class="font-light">Nacha</p>
  </div>
</div>

</section>

</template>

<script>

  export default {
    name: "AboutUs",
    data() {
      return {};
    },
  };

</script>

<style>

</style>