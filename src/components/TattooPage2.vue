<template>
    <Navbar></Navbar>
    <Search></Search>
    <Footer></Footer>

    <div v-if="images">
    <div v-for="(image, index) in images" :key="index">
      <img :src="image.src.medium" />
    </div>
  </div> 

</template>
    
<script>
import Navbar from './Navbar.vue';
import Search from './Search.vue';
import Footer from './Footer.vue';
import { mapState } from 'pinia'
import { useTattooStore } from '../stores/TattooStore.js'

    export default {
        name: "TattooPage2",
        components: { Search, Navbar, Footer },
        computed: {
  ...mapState(useTattooStore, ['images'])
},
        data() {
        return {

        }
    }
    }
</script>