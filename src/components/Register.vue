<template>
    
  <Navbar></Navbar>
<section class="bg-[#F9EEDF] h-[100vh] font-mont text-black flex items-center justify-center"> 
    
    <!-- GRID -->
      <div class="grid grid-cols-12 gap-10 items-center justify-center p-5">

        <!-- COL 1 -->
        <div class="col-span-4 flex flex-col items-center justify-self-end gap-6">
        <div class="bg-white rounded-2xl flex flex-col items-start justify-between p-6 h-[320px] max-w-[240px] shadow-lg">
          <ul class="flex flex-col gap-5 pb-5">
            <h2 class="uppercase text-lg font-extrabold tracking-tight border-b-2 border-b-gray-800 pb-4">Suscripción Basic</h2>
            <li>· Publicaciones</li>
            <li>· Newsletter</li>
            <li>· Difusión en Web</li>
          </ul>
          <div class="flex flex-col border-t-2 border-t-gray-800 w-[180px]">
            <span class="font-extrabold text-2xl pt-2">15€</span>
          </div>
        </div>
      </div>

      <!-- COL 2 -->
        <div class="col-span-8 flex flex-col flex-wrap justify-around rounded-lg">
        <form>
            <div class="mb-4">
                <input type="text" id="name" name="name" placeholder="Nombre" class="px-4 w-[500px] py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" required/>
            </div>

            <div class="mb-4">
                <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" class="px-4 w-[500px] py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F09235] focus:border-transparent" required/>
            </div>

            <div class="mb-4">
                <div>
                    <button @click="selectImage" class="bg-[#8A312E] text-white w-[240px] py-2 px-6 rounded-xl text-sm hover:bg-[#651c19] focus:outline-none focus:ring-2">Adjunta tus tattos (JPG)</button>
                    <input type="file" ref="fileInput" accept="image/*" @change="onFileSelected" style="display: none;" />
                    <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" />
                </div>
            </div>

            <div class="mb-4 flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5">
                <span class="ml-2 text-xs text-gray-500">Acepto los términos y condiciones</span>
            </div>

            <div class="mt-6">
                <button type="submit" class="bg-[#F09235] text-white font-bold w-[500px] py-2 px-6 rounded-xl text-sm hover:bg-[#8A312E] focus:outline-none focus:ring-2 uppercase">pago
                </button>
            </div>
        </form>
      </div>
    </div>
</section>
<Footer></Footer>

</template>
    
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
    export default {
    name: "Register",
    components: {Navbar, Footer},
    data() {
      return {
      imageUrl: null // To store the selected image URL
    };
  },
  methods: {
    selectImage() {
      // Trigger the file input click programmatically
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      // Get the selected file
      const file = event.target.files[0];
      if (file) {
        // Create a URL for the selected image file
        this.imageUrl = URL.createObjectURL(file);
      }
    }
  }
};
</script>