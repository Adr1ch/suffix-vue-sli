<template>
  <div class="list-wrap">
    <ul class="list">
      <GlobalItem
      v-for="item in globalListData"
      :key="item.id"
      :item="item">
      </GlobalItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
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
