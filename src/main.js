import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/helpers/modernizr';

// main components path
import header from './components/header/Header.vue';
import Services from './components/services/Services.vue';
import Baner from './components/baner/Baner.vue';
import Blog from './components/blog/Blog.vue';
import Subs from './components/subscribe/Sub.vue';
import Chapters from './components/chapters/Chapters.vue';
import Collapse from './components/collapse/Collapse.vue';
import Footer from './components/footer/Footer.vue';
import Clients from './components/clients/Clients.vue';

// secondary components path
import Service from './components/services/service-item/Service.vue';
import BlogList from './components/blog/blog-list/BlogList.vue';
import BlogItem from './components/blog/blog-item/BlogItem.vue';
import GlobalList from './components/chunks/reusefull-components/global-blog-list/GlobalList.vue';
import GlobalItem from './components/chunks/reusefull-components/global-blog-item/GlobalItem.vue';
import GlobalBtn from './components/chunks/reusefull-components/global-button/GlobalBtn.vue';
import CollapseItem from './components/collapse/collapse-item/CollapseItem.vue';
import Client from './components/clients/clients-item/Client.vue';

Vue.config.productionTip = false;

// main components
Vue.component('Header', header);
Vue.component('Services', Services);
Vue.component('Baner', Baner);
Vue.component('Blog', Blog);
Vue.component('Subs', Subs);
Vue.component('Chapters', Chapters);
Vue.component('Collapse', Collapse);
Vue.component('Footer', Footer);
Vue.component('Clients', Clients);

// secondary components
Vue.component('ServiceItem', Service);
Vue.component('BlogList', BlogList);
Vue.component('BlogItem', BlogItem);
Vue.component('GlobalList', GlobalList);
Vue.component('GlobalItem', GlobalItem);
Vue.component('GlobalBtn', GlobalBtn);
Vue.component('CollapseItem', CollapseItem);
Vue.component('Client', Client);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
