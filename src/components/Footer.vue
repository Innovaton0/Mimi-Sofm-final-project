<template>

<div class="bg-[#8A312E] text-white mx-auto px-10 py-6 font-mont">
  <div class="flex gap-10 justify-between mb-4">
    <RouterLink to="/home"><img src="/src/assets/logo_larama.png" alt="logo"></RouterLink>
    <ul class="flex flex-col justify-center items-end">
      <li><span class="text-sm">+34 648 49 15 91</span></li>
      <li><span class="text-sm">C/ d'en Grassot, 101, Vila de Gràcia</span></li>
      <li><span class="text-sm">08025 Gràcia, Barcelona, Spain</span></li>
      <ul class="flex gap-5 pt-1">
        <li><a href="https://www.facebook.com/CodeOp.tech"><i class="fa-brands fa-facebook fa-lg"></i></a></li>
        <li><a href="https://www.instagram.com/_codeop/?hl=en"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
        <li><a href="https://www.linkedin.com/school/codeop/"><i class="fa-brands fa-linkedin fa-lg"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UClTDeDAaWf3XrEDZxbFDD1A"><i class="fa-brands fa-youtube fa-lg"></i></a></li>
      </ul>
    </ul>
  </div>
    <div class="flex justify-between gap-4 text-white border-t-2 border-[#e3e3e3]">
      <ul class="flex items-cente gap-6">
        <li><RouterLink to="/home"><span class="uppercase text-xs">home</span></RouterLink></li>
        <li><RouterLink to="/Us"><span class="uppercase text-xs">about us</span></RouterLink></li>
        <li><RouterLink to="/register"><span class="uppercase text-xs">register</span></RouterLink></li>
        <li><RouterLink to="/help"><span class="uppercase text-xs">help</span></RouterLink></li>
      </ul>
        <span class="text-xs pt-1">Copyright © 2024 • Mimi Sofm</span>
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