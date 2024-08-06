<template>
    <Navbar></Navbar>
    <h1> REGISTER</h1>
    <button> Submit </button>
    <Footer></Footer>
</template>
    
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
    export default {
        name: "Register",
        components: { Navbar, Footer },
        data() {
        return {

        }
    }
    }
</script>