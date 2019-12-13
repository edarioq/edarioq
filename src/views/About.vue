<template>
  <main
    class="about"
    :class="{ 'begin' : begin }">
    <figure
      class="circle main-circle"
      v-on:click="clickHere"
      :class="{ 'show' : begin }">
      <div class="dont">
        Don't Click Me
      </div>
    </figure>

    <figure
      class="circle mini-circle"
      v-for="(circle, i) in minis"
      v-on:click="clickHere"
      v-bind:key="i"
      :class="'circle-'+circle.id">
    </figure>

  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {

  public minis: object[];
  public begin: boolean = false;

  constructor() {
    super();

    this.minis = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 }
    ];

  }

  public clickHere(): void {
    this.begin = !this.begin;
    console.log(this.begin);
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/app";

@mixin move($x, $y){
  transform: translate($x, $y);
  opacity: 1;
  transition: 1000ms;
}

.about {
  position: relative;
  height: calc(100vh - 80px);
  user-select: none;
}
.circle {
  background-color: #D8D8D8;
  border-radius: 50%;
  margin: 0;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &.show {
    opacity: 0;
    transition: 100ms;
    z-index: -1;
  }
}
.main-circle {
  width: 222px;
  height: 222px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border: 1px solid #979797;
}
.dont {
  font-family: $belleza-font;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
  color: #9B9B9B;
}
.mini-circle {
  width: 70px;
  height: 70px;
  z-index: 50;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 500ms;
  opacity: 0;
}
.begin {
  .circle-1 {
    @include move(-250px, -250px);
  }
  .circle-2 {
    @include move(-350px, 220px);
  }
  .circle-3 {
    @include move(400px, 100px);
  }
  .circle-4 {
    @include move(200px, -300px);
  }
  .circle-5 {
    @include move(100px, 350px);
  }
  .circle-6 {
    @include move(-500px, 0);
  }
  .circle-7 {
    @include move(-450px, -350px);
  }
  .circle-7 {
    @include move(10px, 30px);
  }
}
</style>
