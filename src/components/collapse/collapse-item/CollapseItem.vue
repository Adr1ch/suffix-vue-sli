<template>
  <li class="collapse__item" :class="accClasses">
    <button class="collapse__btn" @click="toggleAcc">{{ item.title }}</button>
    <div class="collapse__txt-wrap">
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
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleAcc() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    accClasses() {
      return {
        'is-closed': this.isOpen,
      };
    },
  },
};
</script>
