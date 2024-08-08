<template>
  <div class="search-container">
    <label for="search" class="font-bold bg-black text-white text-center py-2 px-5 sm:px-10">
      CATEGORÍAS
    </label>
    <input
      class="w-72 sm:w-[20rem] md:w-[30rem] lg:w-[50rem] p-2 z-20"
      id="search"
      placeholder="Busca aquí"
      type="text"
      v-model="query"
      @input="filterCategories"
    />
    <ul v-if="query && filteredCategories.length" class="suggestions-list">
      <li
        v-for="category in filteredCategories"
        :key="category.name"
        class="suggestion-item"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",  // Texto de búsqueda ingresado por el usuario
      categories: [
        { name: "JAPONÉS", route: "/tattoo2" },
        { name: "FLORAL", route: "/tattoo2" },
        { name: "MINIMAL", route: "/tattoo2" },
        { name: "ILUSTRACIONES", route: "/tattoo2" },
        { name: "BLACK PURE", route: "/tattoo2" },
        { name: "TATUAJES", route: "/tattoo" },
        { name: "TATUADORES", route: "/tattooartists" },
        { name: "AYUDA", route: "/help" },
        { name: "NOSOTROS", route: "/Us" },
        { name: "UNETE", route: "/joinus" },
   
      ],
      filteredCategories: [],  // Categorías filtradas que coinciden con la búsqueda
    };
  },
  methods: {
    filterCategories() {
      // Filtrar categorías basadas en la consulta del usuario
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    selectCategory(category) {
      // Redirigir a la ruta específica de la categoría seleccionada
      this.$router.push(category.route);

      // Limpiar el campo de búsqueda y las sugerencias
      this.query = "";
      this.filteredCategories = [];
    },
  },
};
</script>


<style scoped>
.search-container {
  margin: 60px auto 20px; /* Aumenta el margen superior para separarlo de otros elementos */
  padding: 10px;
  border-radius: 5px;
  display: flex; /* Utiliza flexbox para alinear la etiqueta y el input */
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  gap: 10px; /* Espacio entre la etiqueta y el campo de búsqueda */
  max-width: 100%; /* Asegura que el contenedor no exceda el ancho de su contenedor padre */
  position: relative;
}

.search-label {
  background-color: black;
  color: white;
  padding: 8px 12px;
  border-radius: 0; /* Elimina los bordes redondeados para hacer la etiqueta rectangular */
  font-weight: bold; /* Asegura que el texto esté en negrita */
  white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
  /* El ancho de la etiqueta se ajustará automáticamente según el contenido */
}

.search-input {
  flex: 1; /* Permite que el campo de búsqueda ocupe el espacio restante */
  max-width: 100%; /* Ajusta el ancho máximo del input al ancho del contenedor */
  padding: 8px;
}

.suggestions-list {
  margin-top: 8px; /* Añade un margen superior para separar las sugerencias del campo de búsqueda */
  padding: 0;
  list-style: none;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 100%; /* Coloca la lista de sugerencias justo debajo del campo de búsqueda */
  left: 0; /* Alinea la lista con el borde izquierdo del campo de búsqueda */
  width: 100%; /* Asegura que la lista de sugerencias tenga el mismo ancho que el campo de búsqueda */
  max-width: 100%; /* Asegura que la lista de sugerencias no exceda el ancho del contenedor */
  z-index: 10;
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .search-container {
    flex-direction: column; /* Cambia la dirección de flex a columna en pantallas más pequeñas */
    align-items: flex-start; /* Alinea los elementos al inicio del contenedor */
  }

  .search-label {
    margin-bottom: 10px; /* Añade margen inferior para separar la etiqueta del campo de búsqueda */
  }

  .search-input {
    width: 100%; /* Asegura que el campo de búsqueda ocupe todo el ancho disponible */
  }
}

@media (max-width: 480px) {
  .search-label {
    font-size: 14px; /* Ajusta el tamaño del texto en pantallas más pequeñas */
    padding: 6px 10px; /* Ajusta el relleno de la etiqueta */
  }

  .search-input {
    padding: 6px; /* Ajusta el relleno del campo de búsqueda */
  }

  .suggestions-list {
    max-width: 100%; /* Asegura que la lista de sugerencias no exceda el ancho del contenedor */
  }
}
</style>