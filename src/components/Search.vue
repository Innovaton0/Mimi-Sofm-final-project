<template>
  <div class="search-component">
    <label
      for="search"
      class="font-bold bg-black text-white text-center py-2 px-5 sm:px-10"
    >
      CATEGORÍAS
    </label>
    <input
      v-model="searchQuery"
      @input="onInputChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      class="w-[50rem] p-2"
      id="search"
      placeholder="Busca aquí"
      type="text"
    />
    <ul v-if="showSuggestions" class="suggestions">
      <li
        v-for="(suggestion, index) in filteredCategories"
        :key="suggestion"
        :class="{ 'suggestion-active': index === activeIndex }"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchQuery: "", // Término de búsqueda
      categories: [
        "floral",
        "japonés",
        "ilustraciones",
        "minimal",
        "pure black",
        "tatuajes",
        "tatuadores",
        "ayuda",
        "únete",
        "nosotros",
      ], // Lista de categorías
      showSuggestions: false, // Controla la visibilidad de las sugerencias
      activeIndex: -1, // Índice de la sugerencia actualmente seleccionada
    };
  },
  computed: {
    filteredCategories() {
      // Filtra las categorías para sugerencias
      if (!this.searchQuery) return [];
      return this.categories.filter((category) =>
        category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    onInputChange() {
      this.showSuggestions = this.filteredCategories.length > 0;
      this.activeIndex = -1; // Reinicia el índice activo
    },
    selectSuggestion(suggestion) {
      // Lógica para seleccionar una sugerencia y navegar
      this.searchQuery = suggestion;
      this.showSuggestions = false;
      this.navigateToPage(suggestion);
    },
    navigateToPage(category) {
      // Lógica para navegar a la página correspondiente
      // Ejemplo: usando router (suponiendo que tienes un enrutador configurado)
      this.$router.push({ name: category });
    },
    onArrowDown() {
      // Mueve la selección hacia abajo en las sugerencias
      if (this.activeIndex < this.filteredCategories.length - 1) {
        this.activeIndex++;
      }
    },
    onArrowUp() {
      // Mueve la selección hacia arriba en las sugerencias
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    onEnter() {
      // Selecciona la sugerencia actual al presionar Enter
      if (this.activeIndex !== -1) {
        this.selectSuggestion(this.filteredCategories[this.activeIndex]);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para las sugerencias */
.suggestions {
  list-style-type: none;
  padding: 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  width: 50rem;
  z-index: 1000;
}

.suggestions li {
  padding: 10px;
  cursor: pointer;
}

.suggestion-active {
  background-color: #eaeaea;
}
</style>
