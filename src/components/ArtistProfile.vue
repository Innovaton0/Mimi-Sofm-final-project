<template>
  <div id="app" class="bg-[#F9EEDF] min-h-screen py-10 px-5">
    <div class="max-w-4xl mx-auto rounded-lg overflow-hidden">
      <div class="flex justify-between items-center border-b p-4">
        <h1 class="text-xl font-bold">CATEGORÍAS</h1>
        <input
          type="text"
          placeholder="Busca aquí"
          class="border border-gray-300 rounded p-2"
        />
      </div>

      <div class="p-4 flex flex-col sm:flex-row">
        <div class="flex flex-col items-center sm:items-start mb-4 sm:mb-0 sm:mr-4">
          <div
            class="w-[400px] h-[500px] mb-4"
            :style="{ backgroundColor: randomColor() }"
          >
            <!-- Bloque de color aleatorio para la imagen de perfil -->
          </div>
          <h2 class="text-lg font-semibold">Nicolás Kroft</h2>
        </div>

        <div class="flex-1">
          <div class="mb-4">
            <h3 class="text-md font-bold">BIO</h3>
            <p class="text-sm text-gray-700">
              Nicolás Kroft es un renombrado tatuador argentino nacido en Buenos
              Aires en 1985. Desde joven mostró talento artístico, aprendiendo
              dibujo y pintura de su abuelo. Comenzó como aprendiz en un estudio
              de tatuajes y en 2010, abrió su propio estudio, Ink & Soul,
              ganando reconocimiento por sus retratos. Nicolás ha ganado premios
              en convenciones internacionales y es conocido por su atención al
              detalle y su habilidad para crear diseños personalizados. También
              es un defensor activo de la protección animal, organizando eventos
              benéficos para apoyar refugios.
            </p>
          </div>

          <div class="mb-4">
            <h3 class="text-md font-bold">RRSS</h3>
            <p class="text-sm text-gray-700">@nicokroft @inkandsoul_</p>
          </div>

          <div>
            <h3 class="text-md font-bold">CONTACTO</h3>
            <p class="text-sm text-gray-700">nicolaskroft@inksoul.com</p>
          </div>
        </div>
      </div>

      <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="n in 4"
          :key="n"
          class="w-full pb-full bg-gray-300 relative"
          :style="{ backgroundColor: randomColor() }"
        >
          <!-- Bloques de color aleatorio para los tatuajes -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    randomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>

<style>
.pb-full {
  padding-bottom: 100%;
}
</style>
