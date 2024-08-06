<template>
  <Navbar></Navbar>
    <h1>ERROR 404</h1>
    <h3>Not Found</h3>
    
    <Footer></Footer>
    </template>
    
    <script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
    
      export default {
        name: "NotFound",
        components: { Navbar, Footer },
        data() {
          return {};
        },
      };
    
    </script>