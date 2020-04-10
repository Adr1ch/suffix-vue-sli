<template>
    <section class="services">
        <div class="container">
            <div class="wrap">
                <ul class="list">
                    <ServiceItem
                      v-for="item in advantages"
                      :key="item.id"
                      :item="item">
                    </ServiceItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import './Services.scss';
</style>

<script>
import ServiceItem from '@/components/services/service-item/Service.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    ServiceItem,
  },
  computed: {
    ...mapState('advantages', ['advantages']),
    ...mapState('translations', ['trans']),
    ...mapGetters('advantages', {
      advantages: 'revArr',
    }),
  },
  created() {
    this.$store.dispatch('advantages/getAdvantages');
  },
};
</script>
