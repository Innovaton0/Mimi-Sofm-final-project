<template>
    <nav class="bg-black py-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Menú de búsqueda a la izquierda -->
        <div class="text-white ml-4">
          <span class="font-semibold">¿Qué buscas?</span>
          <select class="bg-black text-white border-none outline-none ml-2">
            <option value="">▼</option>
          </select>
        </div>
  
        <!-- Logo centrado -->
        <div class="flex justify-center">
          <img src="../assets/logo_larama.png" alt="La Rama Logo" class="h-16" />
        </div>
  
        <!-- Enlaces de navegación a la derecha -->
        <div class="flex space-x-8 mr-4">
          <a href="#" class="text-white hover:text-gray-300">Únete</a>
          <a href="#" class="text-white hover:text-gray-300">Ayuda</a>
          <a href="#" class="text-white hover:text-gray-300">Nosotros</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    // Aquí puedes agregar lógica si es necesario
  };
  </script>
  
  <style>
  /* Agrega estilos adicionales si es necesario */
  </style>
  