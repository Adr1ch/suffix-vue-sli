<template>
  <div id="app">
    <Header></Header>
      <transition name="page">
        <router-view/>
      </transition>
    <Footer></Footer>
    <div class="preloader">
      <img :src="require('@/assets/images/logo.png')" alt="">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
