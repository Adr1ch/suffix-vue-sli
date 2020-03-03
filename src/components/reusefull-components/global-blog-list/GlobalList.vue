<template>
  <div class="blog__list-wrap-g">
    <ul class="blog__list-g">
      <GlobalItem
      v-for="item in globalListData"
      :key="item.id"
      :item="item">
      </GlobalItem>
    </ul>
  </div>
</template>

<style lang="scss">
@import './GlobalList.scss';
</style>

<script>
export default {
  data() {
    return {
      globalListData: [
        {
          id: 0,
          title: 'Lorem ipsum consectetur adipisicing elit.',
        },
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          title: 'Lorem ipsum consectetur elit.',
        },
      ],
    };
  },
};
</script>
