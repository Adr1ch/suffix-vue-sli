<template>
  <div class="blogitem">
    <BlogPage :item="article"></BlogPage>
  </div>
</template>

<script>
import BlogPage from '@/components/blog-page/BlogPage.vue';
import { mapState, mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
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
    this.getArticleBySlug(this.$route.params.slug);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`blog/${mutt.DELETE_ARCTICLE}`);
    next();
  },
};
</script>
