<template>
  <div class="wrap">
    <ul class="list">
      <BlogItem
      v-for="item in currArticle[0]"
      :item="item"
      :key="item.id">
      </BlogItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import './BlogList.scss';
</style>

<script>
import BlogItem from '@/components/blog/blog-item/BlogItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      currArticle: [],
    };
  },
  props: {
    tag: {
      type: String,
    },
    top: {
      type: Number,
    },
    skip: {
      type: Number,
    },
  },
  components: {
    BlogItem,
  },
  computed: {
    ...mapState('blog', ['tags']),
  },
  created() {
    this.getArticlesByTagName().then(() => {
      const el = this.tags.find((i) => i.data.name === this.tag);
      const tagId = el && el.id ? el.id : null;
      this.getArticlesByTagName({
        tagId,
        toSkip: this.skip,
        toTop: this.top,
      }).then((r) => {
        if (this.currArticle.length) return;
        this.currArticle = r;
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTagName']),
  },
};
</script>
