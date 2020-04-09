<template>
  <div class="btn-wrap">
    <button class="btn">
      {{$t(btnTxt) | toUpper}}
    </button>
  </div>
</template>

<style scoped lang="scss">
@import './GlobalBtn.scss';
</style>

<script>
export default {
  props: {
    btnTxt: {
      type: String,
    },
  },
};
</script>
