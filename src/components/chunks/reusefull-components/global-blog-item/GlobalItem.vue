<template>
  <li class="item">
    <div class="photo-wrap">
      <img class="photo" :src="require('@/assets/images/photo.jpg')" alt="">
    </div>
    <div class="info-wrap">
      <div class="date">
        <p class="dmy">10/10/2020</p>
        <a href="" class="link">LIFESTYLE</a>
      </div>
      <div class="title-info">
        <h2 class="title">{{ item.title }}</h2>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import './GlobalItem.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
