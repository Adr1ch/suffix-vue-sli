<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <h3 class="title">{{categories[0] | toUpper}}</h3>
        <BlogList :tag="categories[0]" :top="2" :skip="3"></BlogList>
        <GlobalList :tag="categories[0]" v-if="isLoad" :top="3" :skip="0"></GlobalList>
        <router-link to="/blog">
          <GlobalBtn :btnTxt="trans.other.all"></GlobalBtn>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Blog.scss';
</style>

<script>
import BlogList from '@/components/blog/blog-list/BlogList.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      categories: ['lifestyle'],
      isLoad: false,
    };
  },
  components: {
    BlogList,
  },
  computed: {
    ...mapState('blog', ['tags', 'filtArticles']),
    ...mapState('translations', ['trans']),
  },
  created() {
    this.$store.dispatch('blog/getArticlesByTag').then(() => {
      this.isLoad = true;
    });
  },
};
</script>
