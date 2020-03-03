<template>
  <li class="collapse__item">
    <button class="collapse__btn"
    @click="item.clicked = !item.clicked">{{ item.title }}</button>
    <div class="collapse__txt-wrap" v-show="item.clicked">
      <p class="collapse__txt">{{ item.text }}</p>
    </div>
  </li>
</template>

<style lang="scss">
@import './CollapseItem.scss';
</style>

<script>
export default {
  props: ['item'],
};
</script>
