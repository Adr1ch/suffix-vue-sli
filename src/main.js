import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faBlog, faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from '@/plugins/i18n';
import mixin from '@/helpers/filters';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/helpers/modernizr';


import GlobalList from './components/chunks/reusefull-components/global-blog-list/GlobalList.vue';
import GlobalItem from './components/chunks/reusefull-components/global-blog-item/GlobalItem.vue';
import GlobalBtn from './components/chunks/reusefull-components/global-button/GlobalBtn.vue';

Vue.mixin(mixin);

library.add(faHome, faBlog, faUsers);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('GlobalList', GlobalList);
Vue.component('GlobalItem', GlobalItem);
Vue.component('GlobalBtn', GlobalBtn);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
