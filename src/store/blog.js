import http from '@/plugins/http';
import Vue from 'vue';

const mutt = {
  SET_ARTICLES: 'SET_ARTICLES',
  SET_ARTICLE: 'SET_ARTICLE',
  SET_LOADED: 'SET_LOADED',
  SET_TAGS: 'SET_TAGS',
  SET_ARTICLES_BY_TAGS: 'SET_ARTICLES_BY_TAG',
};

export { mutt };

export default {
  namespaced: true,
  state: {
    articles: [],
    tags: [],
    filtArticles: {},
    article: [],
    loaded: false,
  },
  mutations: {
    [mutt.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [mutt.SET_ARTICLES_BY_TAGS](state, { data, tag }) {
      if (tag) Vue.set(state.filtArticles, tag, data);
      // if (tag in state.filtArticles) {
      //   state.filtArticles = { ...state.filtArticles, [tag]: data };
      // }
    },
    [mutt.SET_ARTICLES](state, articles) {
      state.articles = articles;
    },
    [mutt.SET_ARTICLE](state, value) {
      state.article = value;
    },
    [mutt.DELETE_ARTICLE](state) {
      state.article = [];
    },
    [mutt.SET_LOADED](state) {
      state.loaded = true;
    },
  },
  actions: {
    getTags({ commit, state }) {
      if (state.tags.length) {
        return true;
      }
      commit(mutt.SET_LOADED);
      return new Promise((resolve) => {
        http.get('/api/content/suffix/categories').then((res) => {
          commit(mutt.SET_TAGS, res.data.items);
          resolve(res.data);
        });
      });
    },
    getArticles({ commit, dispatch }) {
      Promise.all([
        new Promise((resolve, reject) => {
          http.get('/api/content/suffix/articles').then((res) => {
            commit(mutt.SET_ARTICLES, res.data.items);
            resolve(res.data);
          },
          ({ response }) => {
            reject(response.data);
          });
        }),
        dispatch('getTags'),
      ]);
    },
    getArticleBySlug({ commit }, slug) {
      return new Promise((resolve) => {
        http.get('/api/content/suffix/articles', {
          params: {
            $filter: `data/slug/iv eq '${slug}'`,
          },
        }).then((res) => {
          commit(mutt.SET_ARTICLE, res.data.items);
          resolve(res.data);
        });
      });
    },
    getArticlesByTag({ commit, dispatch }, {
      tagId, tag, toSkip, toTop,
    } = { tagId: '', toSkip: 0, toTop: 3 }) {
      return Promise.all([
        new Promise((resolve, reject) => {
          http.get('/api/content/suffix/articles', {
            params: {
              $filter: `data/reference/iv eq '${tagId}'`,
              $skip: toSkip,
              $top: toTop,
            },
          }).then((res) => {
            commit(mutt.SET_ARTICLES_BY_TAGS, {
              data: res.data.items,
              tag,
            });
            resolve(res.data);
          },
          ({ response }) => {
            reject(response.data);
          });
        }),
        dispatch('getTags'),
      ]);
    },
    getArticlesByTagName({ dispatch }, {
      tagId, toSkip, toTop,
    } = { tagId: '', toSkip: 0, toTop: 3 }) {
      return Promise.all([
        new Promise((resolve, reject) => {
          http.get('/api/content/suffix/articles', {
            params: {
              $filter: `data/reference/iv eq '${tagId}'`,
              $skip: toSkip,
              $top: toTop,
            },
          }).then((res) => {
            resolve(res.data.items);
          },
          ({ response }) => {
            reject(response.data);
          });
        }),
        dispatch('getTags'),
      ]);
    },
  },
  getters: {
    revArt(state) {
      return state.articles.reverse();
    },
    getFirstArt(state) {
      return state.articles.reverse() && state.articles[0];
    },
    getTagById(state) {
      return (id) => state.tags.find((i) => i.id === id);
    },
  },
};
