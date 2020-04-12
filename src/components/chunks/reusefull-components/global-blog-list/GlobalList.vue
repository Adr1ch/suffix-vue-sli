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
import { mutt } from '@/store/blog';

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
    ...mapState('blog', ['filtArticles']),
  },
  created() {
    this.getSukaBliat({
      tag: this.tag,
      skip: 0,
      top: 3,
    }).then((res) => {
      this.$store.commit(`blog/${mutt.SET_WTF}`, {
        value: res,
        mark: this.tag,
      });
    });
  },
  methods: {
    ...mapActions('blog', ['getSukaBliat']),
  },
};
</script>
