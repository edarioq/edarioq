<template>
  <footer class="footer">Code your Future - {{ date.getFullYear() }}</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  public date: Date = new Date();

  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
$module: 'footer';
.#{$module} {
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 50px;
}
</style>
