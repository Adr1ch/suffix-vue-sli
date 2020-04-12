<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <h3 class="title">{{$t(`tags.${categories[0]}`) | toUpper}}</h3>
        <GlobalList :tag="categories[0]"></GlobalList>
        <router-link to="/blog">
          <GlobalBtn :btnTxt="trans.other.all"></GlobalBtn>
        </router-link>
        <h3 class="title">{{$t(`tags.${categories[1]}`) | toUpper}}</h3>
        <GlobalList :tag="categories[1]"></GlobalList>
        <router-link to="/blog">
          <GlobalBtn :btnTxt="trans.other.all"></GlobalBtn>
        </router-link>
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
      categories: ['interviews', 'news'],
    };
  },
  computed: {
    ...mapState('translations', ['trans']),
  },
};
</script>
