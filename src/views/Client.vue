<template>
  <div class="client">
    <Client :item="client"></Client>
  </div>
</template>

<script>
import Client from '@/components/client-page/Client.vue';
import { mapState, mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
  components: {
    Client,
  },
  computed: {
    ...mapState('clients', ['client']),
  },
  methods: {
    ...mapActions('clients', ['getClientsBySlug']),
  },
  created() {
    this.getClientsBySlug(this.$route.params.slug);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`clients/${mutt.DELETE_CLIENT}`);
    next();
  },
};
</script>
