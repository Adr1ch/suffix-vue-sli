<template>
  <footer class="footer">
    <div class="wrap">
      <div class="logo-wrap">
        <router-link to="/" class="logo">
          <img :src="require('@/assets/images/logo2.png')" alt="">
        </router-link>
        <p class="subtitle">{{$t('other.footer')}}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './Footer.scss';
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('translations', ['trans']),
  },
};
</script>
