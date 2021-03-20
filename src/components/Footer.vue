<template>
  <footer class="footer">{{ date.getFullYear() }}</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  date: Date = new Date();

  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 50px;
}
</style>
