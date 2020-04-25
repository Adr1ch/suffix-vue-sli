<template>
  <div class="home">
    <Baner></Baner>
    <Services></Services>
    <Blog></Blog>
    <Clients></Clients>
    <Subs></Subs>
    <Chapters></Chapters>
    <Collapse></Collapse>
  </div>
</template>

<script>
import Baner from '@/components/baner/Baner.vue';
import Services from '@/components/services/Services.vue';
import Blog from '@/components/blog/Blog.vue';
import Clients from '@/components/clients/Clients.vue';
import Subs from '@/components/subscribe/Sub.vue';
import Chapters from '@/components/chapters/Chapters.vue';
import Collapse from '@/components/collapse/Collapse.vue';

export default {
  // data() {
  //   return {
  //     loaded: false,
  //   };
  // },
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
  //   this.$store.dispatch('blog/lastTry').then(() => {
  //     this.loaded = true;
  //   });
  // },
  // це другий варіант
};
</script>
