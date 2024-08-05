<template>
  <label for=""></label>
  <search /> 
  <!-- poner aquí el buscador -->

    <!-- Aquí va navbar -->

    <div
      class="grid grid-cols-5 justify-between justify-items-center text-white"
    >
      <!-- JAPONES -->
      <div class="col-start-1 col-end-2 border border-black">
        <button class="bg-black">JAPONES</button>
      </div>

      <!-- FLORAL -->
      <div class="col-start-2 col-end-3 border border-red-700">
        <button class="bg-black">FLORAL</button>
      </div>

      <!-- ILUSTRACIONES -->
      <div class="col-start-3 col-end-4 border border-green-700">
        <button class="bg-black">ILUSTRACIONES</button>
      </div>

      <!-- MINIMAL -->
      <div class="col-start-4 col-end-5 border border-yellow-500">
        <button class="bg-black">MINIMAL</button>
      </div>

      <!-- PURE BLACK -->
      <div class="col-start-5 col-end-6 border border-blue-600">
        <button class="bg-black">PURE BLACK</button>
      </div>
    </div>


</template>

<script>
export default {
  name: "TattooPage",
  data() {
    return {};
  },
};
</script>
