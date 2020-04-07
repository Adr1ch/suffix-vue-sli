<template>
  <div class="list-wrap">
    <ul class="list" v-if="filtArticles[tag]">
      <GlobalItem
      v-for="item in filtArticles[tag]"
      :key="item.id"
      :item="item">
      </GlobalItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import './GlobalList.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    tag: {
      type: String,
    },
    skip: {
      type: Number,
    },
    top: {
      type: Number,
    },
  },
  computed: {
    ...mapState('blog', ['filtArticles', 'tags']),
  },
  created() {
    const el = this.tags.find((i) => i.data.name === this.tag);
    const tagId = el && el.id ? el.id : null;
    this.getArticlesByTag({
      tagId,
      tag: this.tag,
      toSkip: this.skip,
      toTop: this.top,
    });
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTag']),
  },
};
</script>
