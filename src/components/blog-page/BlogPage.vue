<template>
  <div class="blog-page">
    <div class="header">
      <div class="container">
        <div class="logo-wrap">
          <div class="dl-wrap">
            <p class="date">{{ item[0].data.date | formatDate }}</p>
            <router-link :to="'/blog'" class="link">
              {{ $t(`tags.${getLink(item[0].data.reference)}`)  | toUpper }}
            </router-link>
          </div>
          <p class="sub-title">{{ item[0].data.title }}</p>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div class="container">
        <div class="content" v-html="item[0].data.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './BlogPage.scss';
</style>

<script>
export default {
  props: {
    item: {
      type: [Array],
    },
  },
};
</script>
