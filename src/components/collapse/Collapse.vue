<template>
  <section class="collapse">
    <div class="container">
      <div class="collapse__wrap">
        <ul class="collapse__list">
          <CollapseItem v-for="item in collapseData"
          :key="item.id"
          :item="item"
          @custom-event="toggleAccordion">
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
          isOpen: true,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
        },
        {
          id: 1,
          isOpen: true,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
        },
        {
          id: 2,
          isOpen: true,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
        },
        {
          id: 3,
          isOpen: true,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
        },
        {
          id: 4,
          isOpen: true,
          title: 'Lorem ipsum dolor amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae, impedit eaque mollitia ea ipsam quisquam voluptatibus! Voluptatum, est iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio?',
        },
      ],
    };
  },
  methods: {
    toggleAccordion(id) {
      this.collapseData.forEach((item, index) => {
        const curr = item;
        if (id === index) {
          curr.isOpen = !curr.isOpen;
          console.log(this.isOpen);
        } else {
          curr.isOpen = true;
        }
      });
    },
  },
};
</script>
