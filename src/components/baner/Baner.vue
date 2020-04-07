<template>
  <section class="baner">
    <div class="photo-section">
      <img class="photo" :src="currArticle[0][0].data.image" alt="">
    </div>
    <div class="info-section">
      <div class="data">
        <p class="dmy">{{ currArticle[0][0].data.date | formatDate }}</p>
        <router-link :to="'/blog/' + currArticle[0][0].data.slug" class="link">
          {{$t(`tags.${getLink(currArticle[0][0].data.reference)}`)}}
        </router-link>
      </div>
      <div class="ti">
        <h2 class="title">{{ currArticle[0][0].data.title }}</h2>
        <p class="info" v-html="currArticle[0][0].data.content"></p>
      </div>
      <router-link :to="'/blog/' + currArticle[0][0].data.slug" class="btn">
        {{$t(`other.${trans.other.more}`) | toUpper}}
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Baner.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    tag: {
      type: String,
    },
    top: {
      type: Number,
    },
    skip: {
      type: Number,
    },
  },
  data() {
    return {
      currArticle: [],
    };
  },
  computed: {
    ...mapState('translations', ['trans']),
    ...mapState('blog', ['tags']),
  },
  created() {
    this.getArticlesByTagName().then(() => {
      const el = this.tags.find((i) => i.data.name === this.tag);
      const tagId = el && el.id ? el.id : null;
      this.getArticlesByTagName({
        tagId,
        toSkip: this.skip,
        toTop: this.top,
      }).then((r) => {
        this.currArticle = r;
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTagName']),
  },
};
</script>
