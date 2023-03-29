<template>
  <div>
    <h2
      class=" flex items-center justify-center relative  text-2xl text-light-gray before:content-['03.'] before:text-green before:mr-1 after:content-['']  after:block  after:relative  after:top-[2px]  after:w-[300px]  after:h-[1px]  after:ml-3  after:bg-dark-gray  xs:text-center xs:justify-center xs:after:w-[50px] xs:text-xl"
    >
      {{ t("TitleContacts") }}
    </h2>
    <div
      class="flex flex-col  items-center justify-center" 
    >
      <h3 class="text-light-gray text-5xl  mt-4 xs:text-2xl">
        {{ t("Contacts.first") }}
      </h3>
      <p class="text-center max-w-2xl text-gray mt-4 xs:text-sm xs:max-w-[365px]">
        {{ t("Contacts.second") }}
      </p>
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"    
        class="border border-green text-green py-3 px-10 mt-8 rounded-md hover:bg-green/10 transition-all duration-300"
      >{{ t("Contacts.third") }}</a>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
});
</script>
