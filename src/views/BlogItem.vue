<template>
  <div class="blogitem">
    <BlogPage :item="article" v-if="isLoad"></BlogPage>
  </div>
</template>

<script>
import BlogPage from '@/components/blog-page/BlogPage.vue';
import { mapState, mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    BlogPage,
  },
  computed: {
    ...mapState('blog', ['article']),
  },
  methods: {
    ...mapActions('blog', ['getArticleBySlug']),
  },
  created() {
    this.getArticleBySlug(this.$route.params.slug).then(() => {
      this.isLoad = true;
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`blog/${mutt.DELETE_ARCTICLE}`);
    this.isLoad = false;
    next();
  },
};
</script>
