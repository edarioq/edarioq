<template>
  <div id="app" v-on:click="setMouseCursor()">
    <!-- <Header /> -->
    <router-view />
    <!-- <Footer /> -->
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

  setMouseCursor(): void {
    console.debug('cool');
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: $lora-font;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: $white;
  background-color: $black;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $lora-font;
  color: $white;
  margin: 0;
  padding: 0;
}
p,
span,
ul,
li {
  margin: 0;
  padding: 0;
  line-height: 1.6;
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
    line-height: 1.6;
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
    &.no-dot {
      &:before {
        display: none;
      }
    }
  }
}
.blue-line {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 23px;
    background-color: $blue;
    width: 30px;
    height: 3px;
  }
}
</style>
