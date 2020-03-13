<template>
  <section class="clients">
    <div class="wrap">
      <div class="photo-section">
        <img class="photo" :src="require('@/assets/images/photo3.jpg')" alt="">
        <div class="overlay"></div>
      </div>
      <div class="default-section"></div>
      <div class="clients-wrap">
        <h3 class="title">OUR CLIENTS</h3>
        <ul class="list">
          <Client v-for="client in clients" :key="client.id"></Client>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
