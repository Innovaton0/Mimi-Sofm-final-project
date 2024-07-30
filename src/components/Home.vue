<template>

<header>

  <!-- IMAGEN -->
<section class="bg-[url('/src/assets/pexels-photo-955938.jpeg')] bg-cover h-[70vh]">
  <h1 class="font-bold text-white text-center">acá va el navbar</h1>

  <!-- BOTONES -->
  <div class="flex justify-center items-center gap-5 m-24 space-x-48 font-bold">
    <button class="bg-[#F09235] rounded-md mt-80 py-5 px-10 text-white">TATUAJES</button>
    <button class="bg-[#F09235] p-3 mt-80 py-5 px-10 rounded-md text-white">TATUADORES</button>
  </div>
</section>

  <!-- FOTOS Y  FONDO BEIGE -->
  <div class="h-[200px] bg-[#F9EEDF]">
  <span>hola</span>
  </div>

</header>



<footer class="bg-[#8A312E] text-white p-20">
    <div class="flex gap-1 border-white border">
      <img src="" alt="">
      <ul class="flex flex-col gap-1">
        <li><span>(+34) 600 00 00 00</span></li>
        <li><span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span></li>
      </ul>
      <div class="border border-red-400">
        <ul>
          <li><svg></svg>FB</li>
          <li><svg></svg>instagram</li>
          <li><svg></svg>twitter</li>
        </ul>
      </div>
    </div>

    <div class="border-yellow-300">
     <ul>
      <li><a href="#" class="uppercasse">about us</a></li>
      <li><a href="#" class="uppercasse">contact us</a></li>
      <li><a href="#" class="uppercasse">help</a></li>
      <li><a href="#" class="uppercasse">privacy policy</a></li>
     </ul>
     <span>Copyright © 2024 • Mimi Sofm.</span>
    </div>
  </footer>

  </template>
  
  <script>
  
  export default {
    name: "home",
    data() {
      return {}
  }
  }
  
  </script>

  <style>

</style>