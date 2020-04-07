<template>
  <section class="subs">
    <div class="photo-section">
      <img class="photo" :src="subscribe.image" alt="">
    </div>
    <div class="info-section">
      <h2 class="title">{{subscribe.title | toUpper}}</h2>
      <button class="btn">{{subscribe.button | toUpper}}</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Sub.scss';
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('subscribe', ['subscribe']),
  },
  created() {
    this.$store.dispatch('subscribe/getSub');
  },
};
</script>
