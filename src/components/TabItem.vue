<template>
  <div
    v-for="tab in names"
    :key="tab.name"
    class="my-3 xs:flex xs:flex-col xs:justify-center xs:items-center "
  >
    <div>
      <button     
        class=" bg-main-bg text-light-gray p-3 mx-4rounded border-b-4 border-dark-gray font-medium hover:bg-green/10 transition-all duration-300 xs:mb-4 sm:mb-4"  
        :class="[{'selected': tab.name === selectedTab}]"
        @click="clickOnTab(tab.name)"
      >
        {{ tab.name }}  
      </button>
    </div>
    <div
      v-if="selectedTab === tab.name"
      class="w-1/2 bg-gray  p-4 rounded flex flex-col items-start justify-center xs:w-[370px] xs:p-2 xs:text-sm" 
    > 
      <div class="flex flex-row text-main-bg my-3 xs:my-2 ">
        <span class="font-bold">Link to the site:</span>
        <a
          class="ml-2 italic hover:underline"
          target="_blank"
          :href="tab.link"
        >
          {{ tab.name }}
        </a>
      </div>
      <div class=" flex flex-row text-main-bg my-3 xs:my-2">
        <span class="font-bold">Status:</span><p class="ml-2 italic">
          {{ tab.status }}
        </p>
      </div>
      <div class=" flex flex-row text-main-bg my-3 xs:my-2">
        <span class="font-bold">Technologies i use:</span><p class="ml-2 italic">
          {{ tab.technologies }}
        </p>
      </div>
      <div class=" flex flex-row text-main-bg my-3 xs:my-2">
        <span class="font-bold">Description:</span><p class="ml-2 italic">
          {{ rt(tab.description) }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n';
const { rt } = useI18n({
  useScope: 'global'
});
defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false,
    default: ''
  }
});

const emit = defineEmits(['changeTab']);
const clickOnTab = (tabName) => {
  emit('changeTab', tabName);
};
</script>

<style scoped>
.selected{
  border-color: #64ffda;
}
</style>
