<template>
  <div>
    <p class="slidein duration-[3000] font-mono text-green text-xl mb-4 xs:text-center xs:mb-3">
      {{ t('myNameIs.greeting') }}
    </p>
    <h2 class=" slidein duration-[3000] text-6xl text-light-gray mb-4 xs:text-base xs:text-center xs:mb-3">
      {{ t('myNameIs.name') }}
    </h2>
    <h2 class="slidein duration-[3000] text-6xl text-gray xs:text-base xs:text-center">
      {{ t('myNameIs.buildThings') }}
    </h2>
    <div class="xs:flex xs:items-center xs:justify-center">
      <p class="slidein duration-[3000] text-gray max-w-[600px] mt-5 leading-7 xs:text-sm xs:text-center  xs:mt-3 xs:max-w-[370px]">
        {{ t('myNameIs.greetingText') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
  useScope: 'global'
});

</script>

