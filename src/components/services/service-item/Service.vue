<template>
    <li class="item">
        <div class="sprite-wrap">
            <img class="sprite" :src="require('@/assets/images/icon1.png')" alt="">
        </div>
        <h3 class="title">{{ item.title }}</h3>
        <p class="info">{{ item.text }}</p>
    </li>
</template>

<style scoped lang="scss">
@import './Service.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
