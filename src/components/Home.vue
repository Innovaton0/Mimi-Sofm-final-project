<template>

<header>

  <!-- IMAGEN -->
<section class="bg-[url('/src/assets/pexels-photo-955938.jpeg')] bg-cover h-[70vh]">
  <h1 class="font-bold text-white text-center">acá va el navbar</h1>

  <!-- BOTONES -->
  <div class="flex justify-around items-center mt-[26rem] font-bold w-full">
    <button class="bg-[#F09235] rounded-md py-5 px-10 flex justify-center text-white">TATUAJES</button>
    <button class="bg-[#F09235] p-3 py-5 px-10 rounded-md text-white">TATUADORES</button>
  </div>
</section>

  <!-- FOTOS Y  FONDO BEIGE -->
  <section class="bg-[#F9EEDF] h-[200px] flex">
  <div class="p-5 w-full">
    <div class="flex m-10 justify-center">
      <div class="flex space-x-12">
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-1433273.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-2183131.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuajes Home/pexels-photo-6153346.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>



  <div class= "p-5 w-full">
    <div class="flex m-10 justify-center">
      <div class="flex space-x-12">
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-1803880.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          /> 
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7005727.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="../assets/Tatuadores Home/pexels-photo-7147772.png"
            alt="Imagen Redonda"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

</section>



</header>


<!-- FOOTER -->
<footer class="bg-[#8A312E] text-white p-20">
  <div class="flex gap-10 justify-between">
    <img src="/src/assets/logo_larama.png" alt="logo" class="h-36">
    <ul class="flex flex-col justify-center gap-1">
      <li><span>(+34) 600 00 00 00</span></li>
      <li><span>345 Faulconer Drive, Suite 4 • </span></li><li><span>Charlottesville, CA, 12345</span></li>
      <ul class="flex gap-5">
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-square-instagram"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
      </ul>
    </ul>
  </div>

    <div class="flex justify-between gap-4 text-white border-t-2 border-[#9a9a9a] py-2 my-2">
      <ul class="flex items-cente gap-6">
        <li><a href="#" class="uppercase text-sm">about us</a></li>
        <li><a href="#" class="uppercase text-sm">contact us</a></li>
        <li><a href="#" class="uppercase text-sm">help</a></li>
        <li><a href="#" class="uppercase text-sm">privacy policy</a></li>
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