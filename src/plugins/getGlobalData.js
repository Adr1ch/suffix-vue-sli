import store from '@/store';

const getGlobalData = function () {
  return Promise.all([
    store.dispatch('translations/getTrans'),
    store.dispatch('blog/getTags'),
  ]);
};

export default getGlobalData;
