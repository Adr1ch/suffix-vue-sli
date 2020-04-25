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
        <!-- <div v-if="twoArticles.length">
          <pre>{{twoArticles}}</pre>
        </div> -->
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
    ...mapGetters('advantages', {
      advantages: 'revArr',
    }),
    // ...mapGetters('blog', {
    //   twoArticles: 'getTwoArticles',
    // }),
  },
  created() {
    this.$store.dispatch('advantages/getAdvantages');
  },
};
</script>
