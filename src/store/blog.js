import http from '@/plugins/http';
import Vue from 'vue';

const mutt = {
  SET_ARTICLES: 'SET_ARTICLES',
  SET_ARTICLE: 'SET_ARTICLE',
  SET_LOADED: 'SET_LOADED',
  SET_TAGS: 'SET_TAGS',
  SET_WTF: 'SET_WTF',
  SET_BLOG_PAGE: 'SET_BLOG_PAGE',
  SET_ARTICLES_FILTER: 'SET_ARTICLES_FILTER',
};

export { mutt };

export default {
  namespaced: true,
  state: {
    articles: [],
    tags: [],
    filtArticles: {},
    objectNew: {},
    blogPage: {},
    article: [],
    loaded: false,
  },
  mutations: {
    [mutt.SET_WTF](state, { value, mark }) {
      Vue.set(state.filtArticles, mark, value);
    },
    [mutt.SET_BLOG_PAGE](state, { value, mark }) {
      Vue.set(state.blogPage, mark, value);
    },
    [mutt.SET_ARTICLES_FILTER](state, { tag, data }) {
      Vue.set(state.objectNew, tag, data);
    },
    [mutt.SET_TAGS](state, tags) {
      state.tags = tags;
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
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/categories').then((res) => {
          commit(mutt.SET_TAGS, res.data.items);
          resolve(res.data);
        });
      });
    },
    //
    getArticles({ commit, dispatch }) {
      Promise.all([
        new Promise((resolve, reject) => {
          http.get('/api/content/newsuffix/articles').then((res) => {
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
    //
    getArticleBySlug({ commit }, slug) {
      return new Promise((resolve) => {
        http.get('/api/content/newsuffix/articles', {
          params: {
            $filter: `data/slug/iv eq '${slug}'`,
          },
        }).then((res) => {
          commit(mutt.SET_ARTICLE, res.data.items);
          resolve(res.data);
        });
      });
    },
    //
    getFilterArticles({ dispatch, state }, { tag, skip, top }) {
      return dispatch('getTags').then(() => {
        const currTag = state.tags.find((i) => i.data.name === tag);
        const tagId = currTag && currTag.id ? currTag.id : null;
        return new Promise((resolve) => {
          http.get('/api/content/newsuffix/articles', {
            params: {
              $filter: `data/reference/iv eq '${tagId}'`,
              $skip: skip,
              $top: top,
            },
          }).then((res) => {
            resolve(res.data.items);
          });
        });
      });
    },
    //
    // lastTry({ dispatch, state, commit }) {
    //   return dispatch('getTags').then(() => {
    //     const requestsByTags = state.tags.map((tag, index) => new Promise((resolve) => {
    //       const objectWithSettings = {
    //         params: {
    //           $filter: `data/reference/iv eq '${tag.id}'`,
    //           $top: index === 2 ? 6 : 3,
    //         },
    //       };
    //       http.get('/api/content/newsuffix/articles', objectWithSettings).then((res) => {
    //         commit(mutt.SET_ARTICLES_FILTER, {
    //           tag: tag.data.name,
    //           data: res.data.items,
    //         });
    //         resolve(res.data.items);
    //       });
    //     }));

    //     return Promise.all(requestsByTags);
    //   });
    // },
    // екшн щоби зробити по другому варіанту роботу, через гетери
    //
  },
  getters: {
    getTagById(state) {
      return (id) => state.tags.find((i) => i.id === id);
    },
    // getTwoArticles(state) {
    //   return state.objectNew.lifestyle.slice(3, 5);
    // },
    // getOneArticle(state) {
    //   return state.objectNew.lifestyle[5].data;
    // },
    // getThreeArticle(state) {
    //   return state.objectNew.lifestyle.slice(0, 3);
    // },
    // гетери, для другого варіанту
  },
};
