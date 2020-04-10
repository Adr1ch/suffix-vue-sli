import http from '@/plugins/http';
import i18n from '@/plugins/i18n';

const mutt = {
  SET_TRANS: 'SET_TRANS',
};

export default {
  namespaced: true,
  state: {
    trans: [],
  },
  mutations: {
    [mutt.SET_TRANS](state, trans) {
      state.trans = trans;
      i18n.setLocalMessage(i18n.locale, trans[0].data.list);
    },
  },
  actions: {
    getTrans({ commit }) {
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/translations').then((res) => {
          commit(mutt.SET_TRANS, res.data.items[0].data.list);
          resolve(res.data);
        });
      });
    },
  },
};
