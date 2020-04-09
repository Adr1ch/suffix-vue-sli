<template>
  <div class="home">
    <Baner :tag="'lifestyle'" :top="1" :skip="5"></Baner>
    <Services></Services>
    <Blog></Blog>
    <Clients></Clients>
    <Subs></Subs>
    <Chapters></Chapters>
    <Collapse></Collapse>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import Baner from '@/components/baner/Baner.vue';
import Services from '@/components/services/Services.vue';
import Blog from '@/components/blog/Blog.vue';
import Clients from '@/components/clients/Clients.vue';
import Subs from '@/components/subscribe/Sub.vue';
import Chapters from '@/components/chapters/Chapters.vue';
import Collapse from '@/components/collapse/Collapse.vue';

export default {
  components: {
    Baner,
    Services,
    Blog,
    Clients,
    Subs,
    Chapters,
    Collapse,
  },
  // created() {
  //   this.$store.dispatch('blog/getArticlesForHomePage');
  // },
  // computed: {
  //   ...mapState('blog', ['articlesForHomePage']),
  // },
};
</script>
