<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <h3 class="title">{{$t(`tags.${categories[0]}`) | toUpper}}</h3>
        <BlogList :tag="categories[0]"></BlogList>
        <GlobalList :tag="categories[0]"></GlobalList>
        <router-link to="/blog">
          <GlobalBtn :btnTxt="'other.all'"></GlobalBtn>
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
    };
  },
  components: {
    BlogList,
  },
  computed: {
    ...mapState('translations', ['trans']),
  },
};
</script>
