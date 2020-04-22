import Vue from 'vue';
import Vuex from 'vuex';

import blog from '@/store/blog';
import auth from '@/store/auth';
import advantages from '@/store/advantages';
import collapse from '@/store/collapse';
import clients from '@/store/clients';
import translations from '@/store/translations';
import subscribe from '@/store/subscribe';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    blog,
    auth,
    advantages,
    collapse,
    clients,
    translations,
    subscribe,
  },
});
