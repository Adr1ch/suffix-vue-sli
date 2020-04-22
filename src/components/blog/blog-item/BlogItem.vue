<template>
  <li class="item">
    <div class="photo-wrap">
      <router-link :to="'/blog/' + item.data.slug" class="art-link"></router-link>
      <div class="overlay"></div>
      <img class="photo" :src="item.data.image" alt="">
    </div>
    <div class="info-wrap">
      <div class="date">
        <p class="dmy">{{item.data.date | formatDate}}</p>
        <router-link :to="'/blog?tag=' + getLink(item.data.reference)" class="link">
          {{$t(`tags.${getLink(item.data.reference)}`)  | toUpper}}
        </router-link>
      </div>
      <div class="title-info">
        <h2 class="title">{{ item.data.title }}</h2>
        <p class="info" v-html="item.data.preview"></p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import './BlogItem.scss';
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
