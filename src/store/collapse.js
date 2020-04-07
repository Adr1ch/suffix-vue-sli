import http from '@/plugins/http';

const mutt = {
  SET_COLLAPSE: 'SET_COLLAPSE',
};

export default {
  namespaced: true,
  state: {
    collapse: [],
  },
  mutations: {
    [mutt.SET_COLLAPSE](state, collapse) {
      state.collapse = collapse;
    },
  },
  actions: {
    getCollapse({ commit, state }) {
      return new Promise((resolve) => {
        if (state.collapse.length) resolve(state.collapse);
        http.get('/api/content/suffix/collapse').then((res) => {
          commit(mutt.SET_COLLAPSE, res.data.items);
          resolve(res.data.items);
        });
      });
    },
  },
};
