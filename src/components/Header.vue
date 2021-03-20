<template>
  <header class="header">
    <div class="header__logo">
      <router-link class="header__logo__link" to="/">edarioq</router-link>
    </div>
    <nav class="header__nav">
      <a href="https://www.linkedin.com/in/edarioq" target="_blank">
        <font-awesome-icon class="header__nav__icon" :icon="icon" />
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
$module: 'header';

.#{$module} {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 25px 0;
  max-width: 960px;
  margin: 0 auto;
  @include tablet {
    padding-left: 50px;
    padding-right: 50px;
  }
  &__logo {
    font-family: $belleza-font;
    font-size: 2rem;
    letter-spacing: 2px;
    &__link {
      display: flex;
      align-items: center;
      text-decoration: none;
      line-height: 1;
      color: $white;
      &:hover {
        color: $blue;
      }
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &__icon {
      font-size: 2rem;
      color: $white;
      transition: 300ms;
      &:hover {
        cursor: pointer;
        color: $blue;
      }
    }
  }
}
</style>
