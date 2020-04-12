<template>
  <section class="clients">
    <div class="wrap">
      <div class="photo-section">
        <img class="photo" :src="require('@/assets/images/photo3.jpg')" alt="">
        <div class="overlay"></div>
      </div>
      <div class="default-section"></div>
      <div class="clients-wrap">
        <h3 class="title">{{trans.other.clients | toUpper}}</h3>
        <ul class="list">
          <Client v-for="client in clients" :key="client.id" :client="client"></Client>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Clients.scss';
</style>

<script>
import Client from '@/components/clients/clients-item/Client.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Client,
  },
  computed: {
    ...mapState('clients', ['clients']),
    ...mapState('translations', ['trans']),
  },
  created() {
    this.$store.dispatch('clients/getClients');
  },
};
</script>
