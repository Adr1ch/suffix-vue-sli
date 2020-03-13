<template>
    <header class="header">
        <div class="container">
            <div class="wrap">
                <a href="" class="burger">
                    <span class="item it1"></span>
                    <span class="item it2"></span>
                    <span class="item it3"></span>
                </a>
                <div class="logo-wrap">
                    <a href="" class="logo">
                        <img :src="require('@/assets/images/logo.png')" alt="">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import './Header.scss';
</style>
