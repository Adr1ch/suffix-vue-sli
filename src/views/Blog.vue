<template>
  <div class="blog">
    <Articles></Articles>
  </div>
</template>

<script>
import Articles from '@/components/articles/Articles.vue';
import { mapActions, mapState } from 'vuex';
// import store from '@/store';

export default {
  components: {
    Articles,
  },
  methods: {
    ...mapActions('blog', ['getCurrentCategory']),
  },
  computed: {
    ...mapState('blog', ['tags']),
  },
  beforeRouteUpdate(to, from, next) {
    this.getCurrentCategory().then(() => {
      const el = this.tags.find((i) => i.data.name === to.query.tag);
      const tagId = el && el.id ? el.id : null;
      this.getCurrentCategory(tagId);
      next();
    });
    this.$store.dispatch('blog/getArticles').then(() => to.query.tag, next());
  },
};
</script>
