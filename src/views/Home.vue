<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <GoodByeWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import GoodByeWorld from '@/components/GoodByeWorld.vue';

@Component({
  components: {
    HelloWorld,
    GoodByeWorld,
  },
})
export default class Home extends Vue {}
</script>
