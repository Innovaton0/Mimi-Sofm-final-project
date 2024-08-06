<template>
    <Navbar></Navbar>
    <Search></Search>
    <h1> TATTOO PAGE 2 </h1>
    <button> Submit </button>
    <Footer></Footer>
</template>
    
<script>
import Navbar from './Navbar.vue';
import Search from './Search.vue';
import Footer from './Footer.vue';

    export default {
        name: "TattooPage2",
        components: { Search, Navbar, Footer },
        data() {
        return {

        }
    }
    }
</script>