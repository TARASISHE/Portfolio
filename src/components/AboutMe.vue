<template>
  <div>
    <h2 class="flex relative items-center  text-2xl text-light-gray before:content-['01.'] before:text-green before:mr-1 after:content-['']  after:block  after:relative  after:top-[2px]  after:w-[300px]  after:h-[1px]  after:ml-3  after:bg-dark-gray  xs:text-center xs:justify-center xs:after:w-[50px] xs:text-xl">
      {{ t("TitleAboutMe") }}
    </h2>
    <div class="flex items-center gap-10 xs:flex-col xs:gap-5">
      <div class="text-gray max-w-[500px] w-1/2 ">
        <p class="my-4 xs:my-2 xs:text-center xs:text-sm">
          {{ t('textAboutMe.first') }}
        </p>
        <p class="my-4 xs:my-2 xs:text-center xs:text-sm">
          {{ t('textAboutMe.third') }}
        </p>
        <p class="mb-4 xs:my-2 xs:text-center xs:text-sm">
          {{ t('textAboutMe.fourth') }}
        </p>
        <ul class="grid grid-cols-2 pl-5">
          <li
            v-for="technology in technologies"
            :key="technology.name"
            class="text-sm my-1 mr-4  text-light-gray relative before:content-['▹'] before:absolute before:left-[-15px] before:text-green xs:before:pr-5 "
          >
            {{ technology.name }}
          </li>
        </ul>
      </div>
      <div class="mt-5 max-w-[500px] w-1/2  h-full relative after:content-[''] after:transition-all after:duration-300 after:absolute after:w-[85%] after:h-full after:rounded after:border-2 after:top-10 after:left-32 after:border-green after:z-[-1] hover:after:top-8 hover:after:left-24  xs:after:hidden xs:mt-3"> 
        <img
          class="w-[90%] h-full ml-10  xs:ml-0 xs:rounded-md"
          src="../assets/img/photo_2023-03-20_18-34-41.jpg"
          alt=""
        >
        <div class="absolute w-[90%] h-full  transition-all duration-300 bg-green top-0 left-10 opacity-40 z-10 hover:opacity-0 xs:hidden"  />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
});

const technologies = ref([
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Vue.Js' },
  { name: 'Vuex' },
  { name: 'Vue-router' },
  { name: 'Firebase' },
  { name: 'Pinia' },
  { name: 'TailwindCSS' }
  
]);
</script>
