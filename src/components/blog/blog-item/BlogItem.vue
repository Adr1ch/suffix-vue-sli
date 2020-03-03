<template>
  <li class="blog__item">
    <div class="blog__photo-wrap">
      <img class="blog__photo" :src="require('@/assets/images/photo.jpg')" alt="">
    </div>
    <div class="blog__info-wrap">
      <div class="blog__date">
        <p class="blog__dmy">10/10/2020</p>
        <a href="" class="blog__link">LIFESTYLE</a>
      </div>
      <div class="blog__title-info">
        <h2 class="blog__title">{{ item.title }}</h2>
        <p class="blog__info">{{ item.text }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import './BlogItem.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
