<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
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
