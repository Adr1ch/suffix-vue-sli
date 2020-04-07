<template>
    <li class="item">
        <div class="sprite-wrap">
            <img class="sprite" :src="item.data.image" alt="">
        </div>
        <h3 class="title">{{ item.data.title }}</h3>
        <div class="info" v-html="item.data.content"></div>
    </li>
</template>

<style scoped lang="scss">
@import './Service.scss';
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
