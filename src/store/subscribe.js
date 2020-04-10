import http from '@/plugins/http';

const mutt = {
  SET_SUBS: 'SET_SUBS',
};

export default {
  namespaced: true,
  state: {
    subscribe: [],
  },
  mutations: {
    [mutt.SET_SUBS](state, sub) {
      state.subscribe = sub;
    },
  },
  actions: {
    getSub({ commit, state }) {
      if (state.subscribe.length) {
        return true;
      }
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/subscribe').then((res) => {
          commit(mutt.SET_SUBS, res.data.items[0].data);
          resolve(res.data);
        });
      });
    },
  },
};
