import http from '@/plugins/http';

const mutt = {
  SET_ADVANTAGES: 'SET_ADVANTAGES',
};

export default {
  namespaced: true,
  state: {
    advantages: [],
  },
  mutations: {
    [mutt.SET_ADVANTAGES](state, advantages) {
      state.advantages = advantages;
    },
  },
  actions: {
    getAdvantages({ commit, state }) {
      if (state.advantages.length) {
        return true;
      }
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/advantages').then((res) => {
          commit(mutt.SET_ADVANTAGES, res.data.items);
          resolve(res.data);
        });
      });
    },
  },
  getters: {
    revArr(state) {
      return state.advantages.reverse();
    },
  },
};
