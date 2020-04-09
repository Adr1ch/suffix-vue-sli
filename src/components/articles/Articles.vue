<template>
  <div class="articles">
    <div class="title-wrap">
      <h2 class="title">ARTICLES</h2>
    </div>
    <div class="container">
      <div class="content-wrap">
        <div class="btn-wrap">
          <ul class="list">
            <li class="item">
              <button class="button"
                @click="showAll">
                {{trans.other.all | toUpper}}
              </button>
            </li>
            <li class="item" v-for="i in tags" :key="i.id">
              <button class="button"
                @click="showCategory(i.data.name)">
                {{i.data.name | toUpper}}
              </button>
            </li>
          </ul>
        </div>
        <div class="articles-wrap" v-if="isLoad">
          <GlobalList v-for="tag in categories"
          :tag="tag"
          :top="3"
          :skip="1"
          :key="tag.id">
          </GlobalList>
        </div>
        <div class="all-art" v-if="isAll">
          <ul class="art-list">
            <GlobalItem v-for="item in articles" :key="item.id" :item="item"></GlobalItem>
          </ul>
        </div>
        <ul class="current" v-if="isCurr">
          <li class="item_" v-for="item in currCategory[0]" :key="item.id" :item="item">
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './Articles.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';

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
    this.$store.dispatch('blog/getArticlesByTag').then(() => {
      this.isLoad = true;
    });
    this.$store.dispatch('translations/getTrans');
    this.$store.dispatch('blog/getArticles');
  },
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['tags', 'articles', 'filtArticles']),
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTag']),
    ...mapActions('blog', ['getArticlesByTagName']),
    showCategory(tagName) {
      this.isLoad = false;
      this.isAll = false;
      this.isCurr = true;
      this.getArticlesByTagName().then(() => {
        const el = this.tags.find((i) => i.data.name === tagName);
        const tagId = el && el.id ? el.id : null;
        this.getArticlesByTagName({
          tagId,
        }).then((r) => {
          this.currCategory = r;
        });
      });
    },
    showAll() {
      this.isLoad = false;
      this.isAll = true;
      this.isCurr = false;
    },
  },
};
</script>
