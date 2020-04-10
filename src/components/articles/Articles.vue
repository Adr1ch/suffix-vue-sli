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
              <router-link
                @click.native="showAll"
                class="button"
                :to="{ path: 'blog', query: { tag: 'all' } }"
              >
                {{trans.other.all | toUpper}}
              </router-link>
            </li>
            <li class="item" v-for="tag in tags" :key="tag.id">
              <router-link
                class="button"
                :to="{ path: 'blog', query: { tag: tag.data.name } }"
                @click.native="showCategory"
              >
                  {{$t(tag.data.name) | toUpper}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="articles-wrap" v-if="isLoad">
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
        </div>
        <div class="current-wrap">
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
        </div>
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
    };
  },
  created() {
    this.$store.dispatch('blog/getArticlesByTag').then(() => {
      this.isLoad = true;
    });
  },
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['tags', 'articles', 'currentCategory']),
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTag']),
    showCategory() {
      this.isLoad = false;
      this.isAll = false;
      this.isCurr = true;
    },
    showAll() {
      this.isLoad = false;
      this.isAll = true;
      this.isCurr = false;
    },
  },
};
</script>
