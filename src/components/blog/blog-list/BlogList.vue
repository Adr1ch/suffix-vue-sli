<template>
  <div class="wrap" v-if="filtArticles.double">
    <ul class="list">
      <BlogItem
      v-for="item in filtArticles.double"
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
import { mutt } from '@/store/blog';

export default {
  props: {
    tag: {
      type: String,
    },
    mark: {
      type: String,
    },
  },
  components: {
    BlogItem,
  },
  computed: {
    ...mapState('blog', ['filtArticles']),
  },
  created() {
    this.getFilterArticles({
      tag: this.tag,
      skip: 3,
      top: 2,
    }).then((res) => {
      this.$store.commit(`blog/${mutt.SET_WTF}`, {
        value: res,
        mark: this.mark,
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getFilterArticles']),
  },
};
</script>
