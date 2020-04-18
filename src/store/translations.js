import http from '@/plugins/http';
import i18n from '@/plugins/i18n';

const mutt = {
  SET_TRANS: 'SET_TRANS',
  SET_LOADED: 'SET_LOADED',
};

export default {
  namespaced: true,
  state: {
    trans: [],
    loaded: false,
  },
  mutations: {
    [mutt.SET_TRANS](state, trans) {
      state.trans = trans;
      i18n.setLocaleMessage(i18n.locale, trans);
    },
    [mutt.SET_LOADED](state) {
      state.loaded = true;
    },
  },
  actions: {
    getTrans({ commit, state }) {
      if (state.loaded) {
        return true;
      }
      commit(mutt.SET_LOADED);
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/translations').then((res) => {
          commit(mutt.SET_TRANS, res.data.items[0].data.list);
          resolve(res.data);
        });
      });
    },
  },
};
