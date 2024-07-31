<template>

<div class="bg-[#8A312E] text-white p-20">
  <div class="flex gap-10 justify-between">
    <img src="/src/assets/logo_larama.png" alt="logo" class="h-36">
    <ul class="flex flex-col justify-center gap-1">
      <li><span>(+34) 600 00 00 00</span></li>
      <li><span>345 Faulconer Drive, Suite 4 • </span></li><li><span>Charlottesville, CA, 12345</span></li>
      <ul class="flex gap-5">
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-square-instagram"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
      </ul>
    </ul>
  </div>

    <div class="flex justify-between gap-4 text-white border-t-2 border-[#9a9a9a] py-2 my-2">
      <ul class="flex items-cente gap-6">
        <li><a href="#" class="uppercase text-sm">about us</a></li>
        <li><a href="#" class="uppercase text-sm">contact us</a></li>
        <li><a href="#" class="uppercase text-sm">help</a></li>
        <li><a href="#" class="uppercase text-sm">privacy policy</a></li>
      </ul>
        <span>Copyright © 2024 • Mimi Sofm.</span>
    </div>
</div>

</template>

<script>

export default {
    name: "Footer",
    data() {
      return {};
    },
  };

</script>