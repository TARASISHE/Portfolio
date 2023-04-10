<template>
  <nav class="flex justify-between items-center w-full h-20 px-4 text-lg fixed top-0 left-0 bg-main-bg z-50 shadow-[0_4px_6px_-1px_rgba(0,255,255,0.3)] opacity-90 xs:justify-center xs:px-2">
    <div class="text-light-gray font-mono xs:hidden">
      {{ time }}   
    </div>
    <div>
      <ul class=" flex gap-4 items-center text-light-gray font-mono ">
        <li
          class="menu__item before:content-[''] before:inline-block before:absolute before:r-0  before:w-0 before:h-[3px] before:bg-green before:duration-300 xs:hidden"
        >
          <a   
            v-smooth-scroll
            href="#about"
            class="light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300"
          > <span class="text-green">01.</span>{{ t('linksName.about') }}</a>
        </li>
        <li
          class="menu__item before:content-[''] before:inline-block before:absolute before:r-0  before:w-0 before:h-[3px] before:bg-green before:duration-300 xs:hidden"
        >
          <a   
            v-smooth-scroll
            href="#works"
            class="light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300 "
          > <span class="text-green">02.</span>{{ t('linksName.works') }}</a>
        </li>
        <li
          class="menu__item before:content-[''] before:inline-block before:absolute before:r-0  before:w-0 before:h-[3px] before:bg-green before:duration-300 xs:hidden"
        >
          <a   
            v-smooth-scroll
            href="#contacts"
            class="light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300"
          > <span class="text-green">03.</span>{{ t('linksName.contacts') }}</a>
        </li>
        <li class="hidden xs:block">
          <a   
            v-smooth-scroll
            href="#about"
            class=" light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300"
          > <font-awesome-icon
            class="w-5 h-5"
            icon="fa-solid fa-user"
          /></a>
        </li>
        <li class="hidden xs:block">
          <a   
            v-smooth-scroll
            href="#works"
            class="light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300"
          > <font-awesome-icon
            class="w-5 h-5"
            icon="fa-solid fa-briefcase"
          /></a>
        </li>
        <li class="hidden xs:block">
          <a   
            v-smooth-scroll
            href="#contacts"
            class="light-gray relative before:content-[''] before:inline-block before:absolute before:r-0 before:w-0 before:h-[3px] before:bg-green before:duration-300"
          > <font-awesome-icon
            class="w-5 h-5"
            icon="fa-solid fa-phone"
          /></a>
        </li>
        <img
          v-if="locale === 'ukr'"
          class="w-10 h-6 rounded-md cursor-pointer"
          src="../assets/img/ukraine-ukraine-flag.gif"
          alt=""
          @click="switchLang()"
        >
        <img
          v-if="locale === 'en'"
          class="w-10 h-6 rounded-md bg-main-bg cursor-pointer "
          src="../assets/img/united-kingdom-flag.gif"
          alt=""
          @click="switchLang()"
        >
        <a
          :href="cv"
          target="_blank"
          class="border border-green py-1 px-3 rounded-md hover:bg-green/10 transition-all duration-300"
        >{{ t("resume") }}</a>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import cv from '../assets/cv/TarasPortfolio.pdf';


const { t, locale } = useI18n({
  useScope: 'global'
});


let date = new Date();
const interval = ref(null);   
const time = ref(null);   

const goTime = () =>{
  interval.value = setInterval(() => {
    date.value = new Intl.DateTimeFormat('en-US').format(date);
    time.value = Intl.DateTimeFormat(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format();
  }, 1000);
};


goTime();


onBeforeUnmount(()=>{
  clearInterval(interval.value);
});


const switchLang = () =>{
  if (locale.value === 'en'){
    locale.value = 'ukr';
  } else {
    locale.value = 'en';
  }
  localStorage.setItem('lang', locale.value);
};

</script>

