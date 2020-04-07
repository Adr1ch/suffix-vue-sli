<template>
  <section class="collapse">
    <div class="container">
      <div class="wrap">
        <ul class="list">
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

<style scoped lang="scss">
@import './Collapse.scss';
</style>

<script>
import CollapseItem from '@/components/collapse/collapse-item/CollapseItem.vue';

export default {
  components: {
    CollapseItem,
  },
  data() {
    return {
      collapseData: null,
    };
  },
  methods: {
    toggleAccordion(id) {
      this.collapseData.forEach((item, index) => {
        const curr = item;
        if (id === index) {
          curr.isOpen = !curr.isOpen;
        } else {
          curr.isOpen = true;
        }
      });
    },
  },
  created() {
    this.$store.dispatch('collapse/getCollapse').then((data) => {
      this.collapseData = data.map((item, index) => ({
        ...item,
        isOpen: true,
        id: index,
      }));
    });
  },
};
</script>
