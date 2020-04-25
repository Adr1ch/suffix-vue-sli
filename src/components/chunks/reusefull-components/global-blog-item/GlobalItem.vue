<template>
  <li class="item">
    <div class="photo-wrap">
      <div class="overlay"></div>
      <router-link :to="'/blog/' + item.data.slug" class="art-link"></router-link>
      <img class="photo" :src="item.data.image" alt="">
    </div>
    <div class="info-wrap">
      <div class="date">
        <p class="dmy">{{item.data.date | formatDate}}</p>
        <router-link :to="'/blog?tag=' + getLink(item.data.reference)" class="link">
          {{$t(`tags.${getLink(item.data.reference)}`) | toUpper}}
        </router-link>
      </div>
      <div class="title-info">
        <router-link :to="'/blog/' + item.data.slug">
          <h2 class="title">{{ item.data.title }}</h2>
        </router-link>
        <p class="text" v-html="item.data.preview"></p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import './GlobalItem.scss';
</style>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>
