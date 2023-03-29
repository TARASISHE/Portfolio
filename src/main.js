import { createApp } from 'vue';
import App from './App.vue';

//Translation
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './i18n';
import { defaultLang } from './i18n';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faEnvelope, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

//Scroll
import VueSmoothScroll from 'vue3-smooth-scroll';
import { MotionPlugin } from '@vueuse/motion';


import './assets/main.css';

const localeStorageLang = localStorage.getItem('lang');

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLang,
  fallbackLocale: 'en',
  messages
});


const app = createApp(App, {
  setup (){
    const { t } = useI18n();
    return { t };
  }
});
app.use(i18n);
app.use(VueSmoothScroll);
app.use(MotionPlugin);
library.add(faPhone, faEnvelope, faTelegram, faGithub, faUser, faBriefcase);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
