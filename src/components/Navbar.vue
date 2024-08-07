<template>
    <div class="flex justify-center items-center pt-8 z-10">
        <div :style="bgColor" class="bg-black text-white align-bottom h-16 -me-4 flex-auto flex items-center ps-4 sm:ps-8">
            <button @click="select = !select " class="after:content-['▼'] after:font-bold after:ps-2">
                ¿Qué buscas?
                <div :style="bgColor" class="bg-black absolute p-5 flex flex-col gap-2" v-if="select">
                    <router-link to="/tattoo">Tatuajes</router-link>
                    <router-link to="/tattooartists">Tatuadores</router-link>
                </div>
            </button>
        </div>
        <router-link to="/" :style="circleColor" class="bg-black rounded-full w-36 h-36 z-20 flex justify-center items-center">
            <img src="../assets/logo-nav.png" alt="logo">
        </router-link>
        <div :style="bgColor" class="bg-black text-white h-16 -ms-4 flex-auto flex justify-end items-center gap-5 pe-4 sm:pe-8">
           <router-link to="/joinus">Únete</router-link>
           <router-link to="/help">Ayuda</router-link>
           <router-link to="/Us">Nosotros</router-link>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: "Navbar",
        props: { bgColor: {
            type: String
        }, 
        circleColor: { type: String } },
        data() {
        return {
          select: false
        }
    }
    }
</script>
<style scoped>
  button {

  }
</style>