<template>
  <section class="blog">
    <div class="container">
      <div class="wrap">
        <ul class="list">
          <li class="item">
            <h3 class="title">{{$t(`tags.${categories[0]}`) | toUpper}}</h3>
            <GlobalList :tag="categories[0]"></GlobalList>
            <router-link to="/blog">
              <GlobalBtn :btnTxt="'other.all'"></GlobalBtn>
            </router-link>
          </li>
          <li class="item">
            <h3 class="title">{{$t(`tags.${categories[1]}`) | toUpper}}</h3>
            <GlobalList :tag="categories[1]"></GlobalList>
            <router-link to="/blog">
              <GlobalBtn :btnTxt="'other.all'"></GlobalBtn>
            </router-link>
          </li>
        </ul>
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
