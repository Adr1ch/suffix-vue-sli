<template>
  <div class="client" v-if="isLoad">
    <Client :item="client"></Client>
  </div>
</template>

<script>
import Client from '@/components/client-page/Client.vue';
import { mapState, mapActions } from 'vuex';
import { mutt } from '@/store/blog';

export default {
  data() {
    return {
      isLoad: false,
    };
  },
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
    this.getClientsBySlug(this.$route.params.slug).then(() => {
      this.isLoad = true;
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`clients/${mutt.DELETE_CLIENT}`);
    this.isLoad = false;
    next();
  },
};
</script>
