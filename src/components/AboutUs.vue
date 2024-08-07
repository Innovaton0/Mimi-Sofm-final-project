<template>

  <Navbar></Navbar>
  <section class="bg-[#F9EEDF] h-full font-mont"> 

  <!-- NOSOTROS -->
  <p class="font-bold border-b-8 border-[#F09235]/100 decoration-[6px] text-2xl w-[20rem] text-end">NOSOTROS</p>

  <div class="flex justify-center mt-10 items-center gap-6">
  
    <!-- MATEUS -->
   <div class="flex flex-col  items-center">
   <img
      src="../assets/Nosotros/T06SBAM50LR-U070HGSUD0C-90cde90c6623-512.png"
      alt="Mateus"
      class="w-14 h-14 sm:w-32 sm:h-32 rounded-full object-cover"
    /> 
    
    
     <p class="font-bold">MATEUS</p>
  </div>

<!-- MARIANTO -->
  <div class="flex flex-col items-center">
   <img
      src="../assets/Nosotros/T06SBAM50LR-U071B5MU0L8-f736a6aa7cee-512.jpg"
      alt="Marianto"
      class="w-14 h-14 sm:w-32 sm:h-32 rounded-full object-cover"
    /> 
    <p class="font-bold">MARIANTO</p>
  </div>

<!-- INNO -->
  <div class="flex flex-col  items-center">
    <img
      src="../assets/Nosotros/innp.png"
      alt="Inno"
      class="w-14 h-14 sm:w-32 sm:h-32 rounded-full object-cover"
    />
    
     <p class="font-bold">INNO</p>
  </div>

<!-- NACHA -->
  <div class="flex flex-col  items-center">
    <img
      src="../assets/Nosotros/IMG_7723.png"
      alt="Nacha"
      class="w-14 h-14 sm:w-32 sm:h-32 rounded-full object-cover"
    />
    
    
     <p class="font-bold">NACHA</p>
  </div>
  </div>


<div class="justify-center items-center mx-24">
    <p class="mt-10 from-neutral-400 text-center font-light"> Nos conocimos en un bootcamp de FrontEnd en CodeOp en Barcelona, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis </p>
  </div>

  <!-- CONTACTO -->
  <p class="font-bold border-b-8 border-[#F09235]/100 text-2xl text-end w-[20rem] mt-20">CONTACTO</p>

  
  <div class="flex-wrap justify-around mt-9 p-7 flex rounded-lg shadow-md">
    <div class="flex flex-col">
    <h2 class="text-lg font-bold m-4 text-left">¡Hablemos!</h2>
        <form>

            <!-- Campo de nombre -->
            <div class="mb-4">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="Nombre"
                    class="px-4 w-[27rem] lg:w-[35rem] py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" />
            </div>

            <!-- Campo de email -->
            <div class="mb-4">
                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com"
                    class="px-4 w-[27rem] lg:w-[35rem] py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" />
            </div>


            <!-- Área de texto -->
            <div class="mb-4">
                <label for="message"></label>
                <textarea id="about" name="about" rows="4" placeholder="Mensaje"
                    class="px-4 w-[27rem] lg:w-[35rem] py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent"></textarea>
            </div>

            <!-- Checkbox -->
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#F09235]">
                    <span class="ml-2 text-sm text-gray-500">Acepto los términos y condiciones</span>
                </label>
            </div>

            <!-- Botón de envío -->
            <div class="mt-6">
                <button type="submit"
                    class=" bg-[#F09235] text-white font-bold py-2 px-4 w-[27rem] lg:w-[35rem] rounded-lg text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:ring-offset-2 focus:ring-offset-white">
                    Enviar
                </button>
            </div>

        </form>
    </div>


    <div class="flex flex-col">
      <p class="font-bold text-sm">Correo:</p>
      <p class="font-bold text-sm">hola@larama.tattoo</p>
      <p class="font-bold text-sm">Ubicación:</p>

      <div class="flex flex-col w-[400px] items-center">
    <img
      src="../assets/Nosotros/Captura de pantalla 2024-07-25 a la(s) 17.19.20.png"
      alt="Mapa"
      class="border-[8px] border-black "
    />
    
  </div>    
    </div>
  </div>
</section>
<Footer>
</Footer>

</template>
<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
  export default {
    name: "AboutUs",
    components: { Navbar, Footer },
    data() {
      return {};
    },
  };

</script>

<style>

</style>