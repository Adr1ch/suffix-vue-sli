<template>
    <section class="services">
        <div class="container">
            <div class="services__wrap">
                <ul class="services__list">
                    <ServiceItem
                        v-for="item in serviceData"
                        :key="item.id"
                        :item="item">
                    </ServiceItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import './Services.scss';
</style>

<script>
export default {
  data() {
    return {
      serviceData: [
        {
          id: 0,
          sprite: 'icon1.png',
          title: 'Webdesign',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
        {
          id: 1,
          sprite: 'icon1.png',
          title: 'Webdev',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
        {
          id: 2,
          sprite: 'icon1.png',
          title: 'Marketing',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
        {
          id: 3,
          sprite: 'icon1.png',
          title: 'Marketing',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
        {
          id: 4,
          sprite: 'icon1.png',
          title: 'Webdesign',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
        {
          id: 5,
          sprite: 'icon1.png',
          title: 'Webdev',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore libero possimus aliquid? Praesentium eaque veritatis sed, eum quia unde assumenda.',
        },
      ],
    };
  },
};
</script>
