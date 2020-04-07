<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <h3 class="title">{{categories[0] | toUpper}}</h3>
        <GlobalList :tag="categories[0]" v-if="isLoad" :skip="1" :top="3"></GlobalList>
        <GlobalBtn :btnTxt="trans.other.all"></GlobalBtn>
        <h3 class="title">{{categories[1] | toUpper}}</h3>
        <GlobalList :tag="categories[1]" v-if="isLoad" :skip="1" :top="3"></GlobalList>
        <GlobalBtn :btnTxt="trans.other.all"></GlobalBtn>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Chapters.scss';
</style>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      isLoad: false,
      categories: ['interviews', 'news'],
    };
  },
  created() {
    this.$store.dispatch('blog/getArticlesByTag').then(() => {
      this.isLoad = true;
    });
  },
  computed: {
    ...mapState('translations', ['trans']),
  },
};
</script>
