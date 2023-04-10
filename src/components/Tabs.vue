<template>
  <div>
    <h2
      class="flex relative text-2xl text-light-gray before:content-['02.'] before:text-green before:mr-1 after:content-['']  after:block  after:relative  after:top-[15px]  after:w-[300px]  after:h-[1px]  after:ml-3  after:bg-dark-gray  xs:text-center xs:justify-center xs:after:w-[50px] xs:text-xl"
    >
      {{ t("TitleMyWorks") }}
    </h2>
    <div class="xs:flex xs:flex-col xs:justify-center xs:items-center">
      <TabItem
        :names="tabs"
        :selected-tab="selectedTab"
        @change-tab="changeTab"
      />
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import TabItem from './TabItem.vue';

const { t } = useI18n({
  useScope: 'global'
});

const tabs = computed(()=>{
  return [
    { 
      name: 'Wine Shop Site',
      status: 'Githab',
      link: 'https://tarasishe.github.io/WineShopSite/ ',
      technologies: 'Vue.js, Firebase, TailwindCss ',
      description: t('MyWorksSDescription.WineShopSite')
    },
    { 
      name: 'Vue Movie',
      status: 'Githab',
      link: 'https://tarasishe.github.io/Vue-movie/',
      technologies: 'Vue.js, Firebase, TailwindCss ',
      description: t('MyWorksSDescription.VueMovie')
    },
    { 
      name: 'Vue App',
      status: 'Githab',
      link: 'https://tarasishe.github.io/VueApp/',
      technologies: 'Vue.js, Firebase, TailwindCss ',
      description: t('MyWorksSDescription.VueApp')
    },
    { 
      name: 'Ukraine for life',
      status: 'Githab',
      link: 'https://tarasishe.github.io/UkraineForLife/',
      technologies: 'Vue.js, Sccs',
      description: t('MyWorksSDescription.UkraineFoLife')
    },
    { 
      name: 'Yoga Masters',
      status: 'Githab',
      link: 'https://tarasishe.github.io/YogaMaster/',
      technologies: 'Vue.js, Sccs',
      description: t('MyWorksSDescription.YogaMasters')
    }
  ];
});

const selectedTab = ref('About');
const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>
