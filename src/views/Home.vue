<template>
  <main class="main-container home">
    <Terminal />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Terminal from '@/components/Terminal.vue';

@Component({
  components: {
    Terminal
  },
})
export default class Home extends Vue {

  constructor() {
    super();
  }


}
</script>

<style scoped lang="scss">

</style>
