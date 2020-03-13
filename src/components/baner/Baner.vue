<template>
  <section class="baner">
    <div class="photo-section">
      <img class="photo" :src="require('@/assets/images/baner-img.jpg')" alt="">
    </div>
    <div class="info-section">
      <div class="data">
        <p class="dmy">10/10/2020</p>
        <a href="" class="link">LIFESTYLE</a>
      </div>
      <div class="ti">
        <h2 class="title">AT VERO EOS ET ACCUSSAMUSS ET</h2>
        <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quisquam perspiciatis quaerat fugit alias optio illo labore aperiam maiores
          molestias officia?
        </p>
      </div>
      <button class="btn">READ MORE</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './Baner.scss';
</style>
