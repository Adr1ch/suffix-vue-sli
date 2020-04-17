<template>
  <div id="app">
    <Header></Header>
      <transition name="page">
        <router-view/>
      </transition>
    <Footer></Footer>
    <div class="preloader">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  transform: translateX(30%);
  opacity: 0;
}
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
