<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})

export default class App extends Vue {

  constructor() {
    super();
  }
}

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
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  color: $black;
  background-color: $gray;
  position: relative;
  overflow-y: scroll;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $lora-font;
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
  margin-left: 20px;
  li {
    margin-bottom: 0;
    list-style-type: none;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -12px;
      width: 4px;
      height: 4px;
      background-color: $black;
      border-radius: 25%;
    }
  }
}
</style>
