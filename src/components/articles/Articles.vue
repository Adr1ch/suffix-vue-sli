<template>
  <div class="articles">
    <div class="title-wrap">
      <h2 class="title">ARTICLES</h2>
    </div>
    <div class="container">
      <div class="content-wrap">
        <div class="btn-wrap">
          <ul class="list">
            <!-- <li class="item">
              <button class="button"
                @click="showAll">
                {{trans.other.all | toUpper}}
              </button>
            </li> -->
            <!-- <li class="item" v-for="i in tags" :key="i.id">
              <button class="button"
                @click="showCategory(i.data.name)">
                {{i.data.name | toUpper}}
              </button>
            </li> -->
          </ul>
          <router-link
            class="button"
            :to="{ path: 'blog', query: { tag: tag.data.name } }"
            :key="tag.id"
            v-for="tag in tags">
              {{tag.data.name}}
          </router-link>
        </div>
        <!-- <div class="articles-wrap" v-if="isLoad">
          <GlobalList v-for="tag in categories"
          :tag="tag"
          :top="3"
          :key="tag.id">
          </GlobalList>
        </div>
        <div class="all-art" v-if="isAll">
          <ul class="art-list">
            <GlobalItem v-for="item in articles" :key="item.id" :item="item"></GlobalItem>
          </ul>
        </div> -->
        <ul class="current">
          <li class="item_"
            v-for="item in currentCategory"
            :key="item.id"
            :item="item">
            <div class="photo-wrap">
              <img class="photo" :src="item.data.image" alt="">
            </div>
            <div class="info-wrap">
              <div class="date">
                <p class="dmy">{{item.data.date | formatDate}}</p>
                <router-link :to="'/blog/' + item.data.slug" class="link">
                  {{$t(`tags.${getLink(item.data.reference)}`)}}
                </router-link>
              </div>
              <div class="title-info">
                <h2 class="title_">{{ item.data.title }}</h2>
                <p class="info" v-html="item.data.content"></p>
              </div>
            </div>
          </li>
        </ul>
        <pre>{{ currentCategory }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './Articles.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';
// import store from '@/store';

export default {
  data() {
    return {
      isLoad: false,
      isAll: false,
      isCurr: false,
      categories: ['lifestyle', 'interviews', 'news'],
      currCategory: null,
    };
  },
  created() {
    // this.$store.dispatch('blog/getArticlesByTag').then(() => {
    //   this.isLoad = true;
    // });
    this.$store.dispatch('blog/getArticles');
    // this.getCurrentCategory().then(() => {
    //   const el = this.tags.find((i) => i.data.name === this.$route.query.tag);
    //   const tagId = el && el.id ? el.id : null;
    //   this.getCurrentCategory(tagId);
    // });
  },
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['tags', 'articles', 'filtArticles', 'currentCategory']),
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTag']),
    // ...mapActions('blog', ['getArticlesByTagName']),
    ...mapActions('blog', ['getCurrentCategory']),
    // showCategory(tagName) {
    //   this.isLoad = false;
    //   this.isAll = false;
    //   this.isCurr = true;
    //   this.getArticlesByTagName().then(() => {
    //     const el = this.tags.find((i) => i.data.name === tagName);
    //     const tagId = el && el.id ? el.id : null;
    //     this.getArticlesByTagName({
    //       tagId,
    //     }).then((r) => {
    //       this.currCategory = r;
    //     });
    //   });
    // },
    showAll() {
      this.isLoad = false;
      this.isAll = true;
      this.isCurr = false;
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.getCurrentCategory().then(() => {
      const el = this.tags.find((i) => i.data.name === to.query.tag);
      const tagId = el && el.id ? el.id : null;
      this.getCurrentCategory(tagId);
    });
    next();
  },
};
</script>
