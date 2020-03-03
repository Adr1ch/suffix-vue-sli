<template>
  <section class="baner">
    <div class="baner__photo-section">
      <img class="baner__photo" :src="require('@/assets/images/baner-img.jpg')" alt="">
    </div>
    <div class="baner__info-section">
      <div class="baner__data">
        <p class="baner__dmy">10/10/2020</p>
        <a href="" class="baner__link">LIFESTYLE</a>
      </div>
      <div class="baner__ti">
        <h2 class="baner__title">AT VERO EOS ET ACCUSSAMUSS ET</h2>
        <p class="baner__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quisquam perspiciatis quaerat fugit alias optio illo labore aperiam maiores
          molestias officia?
        </p>
      </div>
      <button class="baner__btn">READ MORE</button>
    </div>
  </section>
</template>

<style lang="scss">
@import './Baner.scss';
</style>
