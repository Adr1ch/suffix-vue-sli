<template>
  <section class="baner">
    <div class="photo-section">
      <img class="photo" :src="filtArticles.baner.image" alt="">
    </div>
    <div class="info-section">
      <div class="data">
        <p class="dmy">{{ filtArticles.baner.date | formatDate }}</p>
        <router-link :to="'/blog/' + filtArticles.baner.slug" class="link">
          {{$t(`tags.${getLink(filtArticles.baner.reference)}`) | toUpper}}
        </router-link>
      </div>
      <div class="ti">
        <h2 class="title">{{ filtArticles.baner.title }}</h2>
        <p class="info" v-html="filtArticles.baner.content"></p>
      </div>
      <router-link :to="'/blog/' + filtArticles.baner.slug" class="btn">
        {{$t(trans.other.more) | toUpper}}
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Baner.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['filtArticles']),
  },
  created() {
    this.getSukaBliat({
      tag: 'lifestyle',
      skip: 5,
      top: 1,
    }).then((res) => {
      this.$store.commit(`blog/${mutt.SET_WTF}`, {
        value: res[0].data,
        mark: 'baner',
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getSukaBliat']),
  },
};
</script>
