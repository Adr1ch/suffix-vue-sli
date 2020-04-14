<template>
  <div class="blog">
    <Articles></Articles>
  </div>
</template>

<script>
import Articles from '@/components/articles/Articles.vue';
import { mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
  components: {
    Articles,
  },
  methods: {
    ...mapActions('blog', ['getSukaBliat']),
  },
  beforeRouteUpdate(to, from, next) {
    this.getSukaBliat({
      tag: to.query.tag,
    }).then((res) => {
      this.$store.commit(`blog/${mutt.SET_BLOG_PAGE}`, {
        value: res,
        mark: to.query.tag,
      });
    });
    next();
  },
  created() {
    this.$store.dispatch('blog/getTags');
    if (this.$route.query.tag) {
      this.getSukaBliat({
        tag: this.$route.query.tag,
      }).then((res) => {
        this.$store.commit(`blog/${mutt.SET_BLOG_PAGE}`, {
          value: res,
          mark: this.$route.query.tag,
        });
      });
    }
  },
};
</script>
