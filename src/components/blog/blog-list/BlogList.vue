<template>
  <div class="wrap">
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
  components: {
    BlogItem,
  },
  computed: {
    ...mapState('blog', ['filtArticles']),
  },
  created() {
    this.getSukaBliat({
      tag: 'lifestyle',
      skip: 3,
      top: 2,
    }).then((res) => {
      this.$store.commit(`blog/${mutt.SET_WTF}`, {
        value: res,
        mark: 'double',
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getSukaBliat']),
  },
};
</script>
