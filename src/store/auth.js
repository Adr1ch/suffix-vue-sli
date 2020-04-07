import http from '@/plugins/http';

const mutt = {
  SET_TOKEN: 'SET_TOKEN',
};

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    [mutt.SET_TOKEN](state, token = localStorage.token) {
      state.token = token;
      localStorage.token = token;
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
  },
  actions: {
    login({ commit, getters, dispatch }) {
      if (getters.isLogin) return Promise.resolve();

      return new Promise((resolve) => {
        const body = new FormData();
        body.set('grant_type', 'client_credentials');
        body.set('client_id', 'suffix:default');
        body.set('client_secret', 'pjevj0td3zexoe7iqglghsyrqaluzkbywjhjtjx7mqcx');
        body.set('scope', 'squidex-api');
        http.post('/identity-server/connect/token', body).then((resp) => {
          const token = resp.data.access_token;
          commit(mutt.SET_TOKEN, token);
          dispatch('translations/getTrans', null, { root: true });
          resolve(resp.data);
        });
      });
    },
  },
};
