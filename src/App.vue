<template>
  <div id="app" v-on:click="setMouseCursor()">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventBus, EventBusEvents } from './event-bus';
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

  public setMouseCursor(): void {
    eventBus.$emit(EventBusEvents.trigger, 'focus');
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
  font: 1.3rem var(--font);
  margin: 0;
  padding: 0;
  color: var(--white);
  background-color: var(--black);
  background-image: radial-gradient(
    rgba(var(--green-rgb), 0.35),
    var(--black) 130%
  );
  line-height: 1.6;
  text-shadow: 0 0 5px var(--black);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba(var(--black-rgb), 0.15),
      rgba(var(--black-rgb), 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
}
::selection {
  background: var(--blue);
  text-shadow: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font);
  color: var(--white);
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
  color: var(--blue);
  transition: 300ms;
  margin: 0;
  padding: 0;
  text-decoration: none;
  &:hover {
    color: var(--aqua);
  }
}
ul {
  margin-left: 20px;
  li {
    margin-bottom: 0;
    list-style-type: none;
    position: relative;
  }
}
input {
  font-family: var(--font);
}
</style>
