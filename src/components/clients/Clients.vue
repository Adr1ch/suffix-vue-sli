<template>
  <section class="clients">
    <div class="clients__wrap">
      <div class="clients__photo-section">
        <img class="clients__photo" :src="require('@/assets/images/photo3.jpg')" alt="">
        <div class="clients__overlay"></div>
      </div>
      <div class="clients__default-section"></div>
      <div class="clients__clients-wrap">
        <h3 class="clients__title">OUR CLIENTS</h3>
        <ul class="clients__list">
          <Client v-for="client in clients" :key="client.id"></Client>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import './Clients.scss';
</style>

<script>
export default {
  data() {
    return {
      clients: [
        {
          id: 0,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    };
  },
};
</script>
