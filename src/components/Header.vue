<template>
  <header class="header">
    <div class="header__welcome">Welcome to edarioq (v1.0.0 beta)</div>
    <div class="header__date">
      {{ date }}
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  public date: Date = new Date();

  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
$module: 'header';

.#{$module} {
  display: grid;
  grid-template-columns: 1fr;
  padding: 25px 0;
  max-width: 90vw;
  margin: 0 auto;
  &__welcome {
    font-size: 1.2rem;
  }
  &__date {
    font-size: 1.2rem;
  }
}
</style>
