<template>

  <footer class="footer">
      I did this - {{ date.getFullYear() }} &copy;
  </footer>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

    private date: Date;

    constructor() {
        super();
        this.date = new Date();
    }
}
</script>

<style scoped lang="scss">
@import '@/sass/app';

.footer {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50px;
}
</style>