<template>

<section class="bg-[#F9EEDF] h-[100rem] font-mont"> 
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


<div class="flex justify-center space-x-40 mt-5">
  <div>
     <p class="font-bold">MATEUS</p>
  </div>

  <div>
     <p class="font-bold">MARIANTO</p>
  </div>

  <div>
     <p class="font-bold">INNO</p>
  </div>

  <div>
     <p class="font-bold">NACHA</p>
  </div>
</div>


<div class="justify-center items-center">
    <p class="border border-black mt-10 from-neutral-400 text-center font-light"> Nos conocimos en un bootcamp de FrontEnd en CodeOp en Barcelona, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis </p>
  </div>

  <p class="font-bold underline decoration-[rgb(240,146,53)] decoration-[6px] text-2xl m-10">CONTACTO</p>

  <div class="mt-9 p-7 rounded-lg shadow-md">
        <h2 class="text-lg font-bold m-4 text-left">¡Hablemos!</h2>
        <form>

            <!-- Campo de nombre -->
            <div class="mb-4">
                <label for="name"</label>
                <input type="text" id="name" name="name" placeholder="Nombre"
                    class="px-4 py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" />
            </div>

            <!-- Campo de email -->
            <div class="mb-4">
                <label for="email"</label>
                <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com"
                    class="px-4 py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" />
            </div>


            <!-- Área de texto -->
            <div class="mb-4">
                <label for="message"</label>
                <textarea id="about" name="about" rows="4" placeholder="Mensaje"
                    class="px-4 py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent"></textarea>
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
                    class=" bg-[#F09235] text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:ring-offset-2 focus:ring-offset-white">
                    Enviar
                </button>
            </div>

        </form>
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