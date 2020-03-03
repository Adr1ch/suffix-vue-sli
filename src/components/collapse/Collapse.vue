<template>
  <section class="collapse">
    <div class="container">
      <div class="collapse__wrap">
        <ul class="collapse__list">
          <CollapseItem v-for="item in collapseData"
          :key="item.id"
          :item="item">
          </CollapseItem>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import './Collapse.scss';
</style>

<script>
export default {
  data() {
    return {
      collapseData: [
        {
          id: 0,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
          clicked: false,
          active: 'collapse__txt-wrap-clicked',
          inactive: 'collapse__txt-wrap',
        },
        {
          id: 1,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
          clicked: false,
          active: 'collapse__txt-wrap-clicked',
          inactive: 'collapse__txt-wrap',
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
          clicked: false,
          active: 'collapse__txt-wrap-clicked',
          inactive: 'collapse__txt-wrap',
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
          clicked: false,
          active: 'collapse__txt-wrap-clicked',
          inactive: 'collapse__txt-wrap',
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
          clicked: false,
          active: 'collapse__txt-wrap-clicked',
          inactive: 'collapse__txt-wrap',
        },
      ],
    };
  },
};
</script>
