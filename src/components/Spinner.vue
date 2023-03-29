<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-main-bg opacity-90 z-[999] flex items-center justify-center">
    <div class="opacity-90">
      <img
        class="w-40 h-52"
        src="../assets/img/Тризуб.svg.png"
        alt=""
      >
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

@keyframes spin {
    from {transform:rotate3d(0, 0, 0, 0deg);}
    to {transform:rotate3d(0, 1, 0, 360deg);}
}

img{
  animation: spin 2s linear 0s infinite;
}

</style>
