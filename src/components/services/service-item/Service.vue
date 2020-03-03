<template>
    <li class="services__item">
        <div class="services__sprite-wrap">
            <img class="services__sprite" :src="require('@/assets/images/icon1.png')" alt="">
        </div>
        <h3 class="services__title">{{ item.title }}</h3>
        <p class="services__info">{{ item.text }}</p>
    </li>
</template>

<style lang="scss">
@import './Service.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
