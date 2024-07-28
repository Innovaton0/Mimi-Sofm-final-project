<template>
  <div class="container">
    <div class="left-image">
      <img
        src="components/images/landing-page/left-image.jpg"
        alt="woman with tattooed arm"
      />
    </div>
    <div class="center-section">
      <img
        src="components/images/lading-page-ilustracion.png"
        alt="center illustration"
        class="logo"
      />
      <h1>MEJORES TATUAJES & <br />TATUADORES DE BARCELONA</h1>
      <a href="link?" target="_blank" class="home-link">Home</a>
    </div>
    <div class="right-section">
      <img
        src="components/images/landing-page/right-image.jpg"
        alt="woman with several tattoos looking at camera"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing-page",
};
</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.left-section,
.right-section {
  flex: 1px;
  overflow: hidden;
}

.side-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.center-section {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
  padding: 20px;
  position: relative;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin: 0;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  color: #f09235;
  text-decoration: none;
  border: 2px solid #f09235;
}
</style>
