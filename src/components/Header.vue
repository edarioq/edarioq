<template>
  <header class="header">
    <div class="logo">
      <router-link class="home-link" to="/">edarioq</router-link>
    </div>
    <nav class="nav">
      <a href="https://www.linkedin.com/in/edarioq" target="_blank">
        <font-awesome-icon class="icon" :icon="icon" />
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component
export default class Header extends Vue {
  public icon: any;
  constructor() {
    super();
    this.icon = faLinkedin;
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/app";

.header {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 25px 0;
  max-width: 960px;
  margin: 0 auto;
}
.logo {
  font-family: $belleza-font;
  font-size: 2rem;
  letter-spacing: 2px;
}
.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: $black;
  line-height: 1;
  &:hover {
    color: $blue;
  }
}
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.link {
  font-family: $belleza-font;
  font-size: 2rem;
  text-decoration: none;
  color: $black;
  &:not(:last-child) {
    margin-right: 35px;
  }
  &:hover {
    color: $blue;
  }
}
.router-link-exact-active {
  color: $blue;
}
.icon {
  font-size: 2rem;
  color: $black;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    color: $blue;
  }
}
@include tablet {
  .header {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
