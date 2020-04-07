<template>
  <div class="clients">
    <ClientsPage :clientsList="clients"></ClientsPage>
  </div>
</template>

<script>
import ClientsPage from '@/components/clients-page/ClientsPage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ClientsPage,
  },
  computed: {
    ...mapState('clients', ['clients']),
  },
  created() {
    this.$store.dispatch('clients/getClients');
  },
};
</script>
