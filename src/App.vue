<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header
  },
})

export default class App extends Vue {}

</script>

<style lang="scss">
@import '@/sass/app';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: $lora-font;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  color: $black;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $belleza-font;
  color: $black;
  margin: 0;
  padding: 0;
}
p, span, ul, li {
  margin: 0;
  padding: 0;
}
a {
  color: $blue;
  transition: 300ms;
  margin: 0;
  padding: 0;
  &:hover {
    color: $aqua;
  }
}
ul {
  li {
    margin-left: 15px;
  }
}
</style>
