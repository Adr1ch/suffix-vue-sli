<template>
  <div class="wrap">
    <ul class="list">
      <BlogItem
      v-for="item in blogData"
      :item="item"
      :key="item.id">
      </BlogItem>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import './BlogList.scss';
</style>

<script>
export default {
  data() {
    return {
      blogData: [
        {
          id: 0,
          date: '10/10/2020',
          name: 'LIFESTYLE',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi assumenda iusto dolores illum repellendus debitis sint consequuntur maxime beatae.',
        },
        {
          id: 1,
          date: '10/10/2020',
          name: 'LIFESTYLE',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam!',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi assumenda iusto dolores illum repellendus debitis sint consequuntur maxime beatae.',
        },
      ],
    };
  },
};
</script>
