<template>
<Navbar></Navbar>

<div class="py-12 max-auto font-mont">
  <h3 class="font-bold bg-[#F09235] text-white py-2 px-5 rounded-r-2xl decoration-[6px] text-xl w-[20rem] mb-8 text-end uppercase">Preguntas Frecuentes</h3>

  <div class="flex flex-col gap-5 max-w-[66rem] mx-20 px-6">
    <p class="text-xl font-bold tracking-tight">1. ¿Comó funciona? </p>
    <p class="from-neutral-400 font-light">Para contactar a un artista a través de nuestra página web, lo primero que debes hacer es elegir un tatuador o tatuaje y buscar el perfil del tatuador. Ponte en contacto a través del perfil de artista, descubre disponibilidade y pide tu cita online.</p>

    <!-- CARDS -->
    <div class="grid grid-cols-3 gap-7">
      <div class="bg-white rounded-2xl flex items-center gap-2 h-32 p-4">
        <span class="text-7xl font-bold text-[#F09235] ml-[-2rem]">1</span>
        <div class="flex flex-col gap-1">
          <p class="font-bold text-lg text-[#F09235]">Elige a tu tatuador</p>
          <p class="text-sm text-[rgb(123,123,123)] leading-4">Encuentra a un tatuador que cumpla los requisitos y el estilo que quieras.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl flex items-center gap-2 h-32 p-4">
        <span class="text-7xl font-bold text-[#F09235] ml-[-2rem]">2</span>
        <div class="flex flex-col gap-1">
          <p class="font-bold text-lg text-[#F09235]">Ponte en contacto</p>
          <p class="text-sm text-[rgb(123,123,123)] leading-4">Contacta con tu tatuador a través de los datos de su perfil de artista.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl flex items-center gap-2 h-32 p-4">
        <span class="text-7xl font-bold text-[#F09235] ml-[-2rem]">3</span>
        <div class="flex flex-col gap-1">
          <p class="font-bold text-lg text-[#F09235]">Pide una cita</p>
          <p class="text-sm text-[rgb(123,123,123)] leading-4">Haz la reserva para el día que coinciden en disponibilidad.</p>
        </div>
      </div>
    </div>

    <!-- <hr class="border border-[#f6d6a8] my-5"> -->

    <!-- FAQ -->
    <div class="flex flex-col gap-3">
      <p class="text-xl font-bold tracking-tight">2. ¿Cómo elijo el diseño del tatuaje?</p>
      <p class="from-neutral-400 font-light mb-4">Elegir un diseño de tatuaje es un proceso personal. Considera qué tipos de imágenes, símbolos o palabras tienen un significado especial para ti. También es útil inspirarte en el arte, la naturaleza o la cultura que te rodea. Antes de decidir, puedes hacer bocetos, buscar ejemplos en línea o consultar con un artista de tatuajes para obtener ideas.</p>

      <!-- 1 -->
      <p class="text-xl font-bold tracking-tight">3. ¿Tienes dudas con el lugar del cuerpo  donde te quieres tatuar?</p>
      <p class="from-neutral-400 font-light mb-4">Si tienes dudas sobre el lugar de tu cuerpo donde quieres hacerte el tatuaje, o el tamaño del arte o cualquier otra duda, puedes contactar al artista y discutir qué funciona mejor para ti.</p>
      
      <!-- 2 -->
      <p class="text-xl font-bold tracking-tight">4. ¿Es doloroso hacerse un tatuaje?</p>
      <p class="from-neutral-400 font-light mb-4">La experiencia del dolor varía de persona a persona y también depende de la ubicación del tatuaje. Algunas áreas del cuerpo son más sensibles que otras. </p>
      
      <!-- 3 -->
      <p class="text-xl font-bold tracking-tight">5. ¿Cómo debo cuidar mi tatuaje después de hacérmelo?</p>
      <p class="from-neutral-400 font-light mb-4">El cuidado posterior es crucial para la curación de tu tatuaje. Es recomendable limpiar el área suavemente con agua y un jabón suave, aplicar una crema hidratante o ungüento recomendado por tu artista, y evitar la exposición al sol y al agua durante las primeras semanas. También es importante no rascar ni quitar las costras que puedan formarse mientras sana.</p>
      
      <!-- 4 -->
      <p class="text-xl font-bold tracking-tight">6. ¿Los tatuajes son permanentes? ¿Puedo removerlos si cambio de opinión?</p>
      <p class="from-neutral-400 font-light mb-4">Sí, los tatuajes son permanentes, pero hay opciones para retirarlos si cambias de opinión. La eliminación de tatuajes generalmente se realiza mediante láser, pero puede ser un proceso costoso y doloroso, además de no garantizar la eliminación completa. Por lo tanto, es importante reflexionar bien antes de decidirte a tatuarte.</p>
    </div>
  </div>
</div>

<Footer></Footer>
</template>

<script>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';


  export default {
    name: "Help",
    components: { Navbar, Footer },
    data() {
      return {};
    },
  };

</script>

<style></style>