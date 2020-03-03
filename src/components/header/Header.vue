<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrap">
                <a href="" class="header__burger">
                    <span class="header__item it1"></span>
                    <span class="header__item it2"></span>
                    <span class="header__item it3"></span>
                </a>
                <div class="header__logo-wrap">
                    <a href="" class="header__logo">
                        <img :src="require('@/assets/images/logo.png')" alt="">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import './Header.scss';
</style>
