<template>

  <header class="header">
    <div class="logo">
        <router-link class="home-link" to="/">edarioq</router-link>
    </div>
    <nav class="nav">
        <router-link class="link" to="/about">about</router-link>
        <router-link class="link" to="/work">work</router-link>
    </nav>
  </header>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import '@/sass/app';

.header {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 25px 0;
}
.logo {
    font-family: $belleza-font;
    font-size: 30px;
    letter-spacing: 2px;
}
.home-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $aqua;
    line-height: 1;
    &:hover {
        color: $green;
    }
}
.nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.link {
    font-family: $belleza-font;
    font-size: 20px;
    text-decoration: none;
    color: $black;
    &:not(:last-child) {
        margin-right: 35px;
    }
    &:hover {
        color: $aqua;
    }
}
</style>