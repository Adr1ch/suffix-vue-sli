<template>
  <li class="item">
    <div class="photo-wrap">
      <img class="photo" :src="item.data.image" alt="">
    </div>
    <div class="info-wrap">
      <div class="date">
        <p class="dmy">{{item.data.date | formatDate}}</p>
        <router-link :to="'/blog/' + item.data.slug" class="link">
          {{$t(`tags.${getLink(item.data.reference)}`)}}
        </router-link>
      </div>
      <div class="title-info">
        <h2 class="title">{{ item.data.title }}</h2>
        <p class="text" v-html="item.data.content"></p>
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
