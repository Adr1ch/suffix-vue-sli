import http from '@/plugins/http';
import Vue from 'vue';

const mutt = {
  SET_ARTICLES: 'SET_ARTICLES',
  SET_ARTICLE: 'SET_ARTICLE',
  SET_LOADED: 'SET_LOADED',
  SET_TAGS: 'SET_TAGS',
  SET_ARTICLES_BY_TAGS: 'SET_ARTICLES_BY_TAG',
  SET_ARTICLES_FOR_HOME: 'SET_ARTICLES_FOR_HOME',
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
    articlesForHomePage: {},
  },
  mutations: {
    [mutt.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [mutt.SET_ARTICLES_BY_TAGS](state, { data, tag }) {
      if (tag) Vue.set(state.filtArticles, tag, data);
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
    [mutt.SET_ARTICLES_FOR_HOME](state, { data, tag }) {
      Vue.set(state.articlesForHomePage, tag, data);
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
    //
    //
    //
    setArticlesWithTag({ commit, state }) {
      return Promise.all(state.tags.map((tag, index) => new Promise((resolve, reject) => {
        const settingObj = {
          params: {
            $filter: `data/reference/iv eq '${tag.id}'`,
            $top: index === 1 ? 6 : 3,
          },
        };
        http.get('/api/content/suffix/articles', settingObj).then((res) => {
          commit(mutt.SET_ARTICLES_FOR_HOME, {
            data: res.data.items,
            tag: tag.data.name,
          });
          resolve(res.data);
        },
        ({ response }) => {
          reject(response.data);
        });
      })));
    },
    getArticlesForHomePage({ dispatch }) {
      return dispatch('getTags').then(() => dispatch('setArticlesWithTag'));
    },
    //
    //
    //
  },
  getters: {
    revArt(state) {
      return state.articles.reverse();
    },
    getFirstArt(state) {
      return state.articlesForHomePage.lifestyle[5];
    },
    getTagById(state) {
      return (id) => state.tags.find((i) => i.id === id);
    },
  },
};
