<template>
    <header class="header" :class="toggleClasses">
        <div class="container">
            <div class="wrap">
                <button class="burger" @click="toggleMenu">
                    <span class="item it1"></span>
                    <span class="item it2"></span>
                    <span class="item it3"></span>
                </button>
                <router-link to="/" class="logo">
                    <img :src="require('@/assets/images/logo.png')" alt="">
                </router-link>
            </div>
            <div class="hover-menu">
                <ul class="menu-list">
                    <li class="menu-item">
                        <router-link class="link" to="/">
                          <div class="icon-wrap">
                            <font-awesome-icon :icon="['fas', 'home']" />
                          </div>
                          Home
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="link" to="/blog">
                          <div class="icon-wrap">
                            <font-awesome-icon :icon="['fas', 'blog']" />
                          </div>
                          Blog
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="link" to="/clients">
                          <div class="icon-wrap">
                            <font-awesome-icon :icon="['fas', 'users']" />
                          </div>
                          Clients
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import './Header.scss';
</style>

<script>
export default {
  data() {
    return {
      showed: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showed = !this.showed;
    },
  },
  computed: {
    toggleClasses() {
      return {
        'is-showed': this.showed,
      };
    },
  },
};
</script>
