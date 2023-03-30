<template>
  <template v-if="spinner">
    <Spinner />
  </template>
  <template v-else>
    <Header />
    <main
      class="mx-auto my-0 max-w-7xl px-3 "
    >
      <Hello class="py-[200px] " />
      <AboutMe
        id="about"
        ref="about"
        class="py-[180px] "
      />
      <MyWorks
        id="works"
        ref="works"
        v-motion-slide-visible-right
        :delay="700"
        class="py-[150px] "
      />
      <Contacts
        id="contacts"
        ref="contacts"
        v-motion-slide-visible-right
        :delay="700"
        class="mb-[250px] xs:mb-[100px] "
      />
      <Socials />
      <!-- v-motion-slide-visible-right -->
    </main>
  </template>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import Header from './components/Header.vue';
import Hello from './components/Hello.vue';
import AboutMe from './components/AboutMe.vue';
import MyWorks from './components/MyWorks.vue';
import Contacts from './components/Contacts.vue';
import Socials from './components/Socials.vue';
import Spinner from './components/Spinner.vue';

const spinner = ref(true);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(()=>{
  scrollToTop();

  setTimeout(()=>{
    spinner.value = false;
  }, 2000);
});

</script>


