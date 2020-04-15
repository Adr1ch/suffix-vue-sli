<template>
  <li class="item">
    <router-link class="link" :to="'/client/' + client.data.slug">
      <img class="logo" :src="client.data.image[1]" alt="">
    </router-link>
  </li>
</template>

<style scoped lang="scss">
@import './Client.scss';
</style>

<script>
export default {
  props: {
    client: {
      type: Object,
    },
  },
};
</script>
