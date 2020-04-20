<template>
  <div class="articles">
    <div class="title-wrap">
      <h2 class="title">{{$t('other.articles') | toUpper}}</h2>
    </div>
    <div class="container">
      <div class="content-wrap">
        <div class="btn-wrap">
          <ul class="list">
            <li class="item">
              <router-link
                class="button"
                :to="{ path: 'blog' }"
              >
                {{$t('other.all') | toUpper}}
              </router-link>
            </li>
            <li class="item" v-for="tag in tags" :key="tag.id">
              <router-link
                class="button"
                :to="{ path: 'blog', query: { tag: tag.data.name } }"
              >
                {{$t(`tags.${tag.data.name}`) | toUpper}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="articles-wrap" v-if="!this.$route.query.tag">
          <GlobalList v-for="tag in categories"
          :tag="tag"
          :key="tag.id">
          </GlobalList>
        </div>
        <div class="current-wrap" v-if="blogPage[this.$route.query.tag]">
          <ul class="current">
            <li class="item_"
              v-for="item in blogPage[this.$route.query.tag]"
              :key="item.id"
              :item="item">
              <div class="photo-wrap">
                <router-link :to="'/blog/' + item.data.slug" class="art-link"></router-link>
                <div class="overlay"></div>
                <img class="photo" :src="item.data.image" alt="">
              </div>
              <div class="info-wrap">
                <div class="date">
                  <p class="dmy">{{item.data.date | formatDate}}</p>
                  <router-link :to="'/blog?tag=' + getLink(item.data.reference)" class="link">
                    {{$t(`tags.${getLink(item.data.reference)}`) | toUpper}}
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      categories: ['lifestyle', 'interviews', 'news'],
    };
  },
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['tags', 'blogPage']),
  },
};
</script>
