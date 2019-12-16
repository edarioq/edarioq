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
      v-bind:key="i"
      v-bind:style="{ transform: boom(circle) }"
      v-bind:class="{ 'begin': begin }"
      @mousedown="startMove(circle, $event)"
      @mousemove="doMove(circle, $event)"
      @mouseup="stopMove(circle, $event)">
      <div class="mini-circle-text">
        {{ circle.id }}
      </div>
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
    this.minis = this.generateMinis();
  }

  public clickHere(): void {
    this.begin = !this.begin;
  }

  public getRandomNumber(min: number, max: number): number {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  }

  public generateMinis(): object[] {
    const rand = this.getRandomNumber(20, 50);
    const figures = [];
    for (let i = 1; i < rand + 1; i++) {
      figures.push({id: i});
    }
    return figures;
  }
  
  public getMaximumScreenValues(): {x: number, y: number} {
    const maxWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const maxHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    return {
      x: Math.round((maxWidth / 2) - 100),
      y: Math.round((maxHeight / 2) - 100)
    };

  }

  public boom(circle: any): string {
    const maxX = this.getMaximumScreenValues().x;
    const maxY = this.getMaximumScreenValues().y;

    const x = this.getRandomNumber(-maxX, maxX);
    const y = this.getRandomNumber(-maxY, maxY);
    if (!this.begin) {
      return `translate(-50%, -50%)`;
    } else {
      return `translate(${x}px, ${y}px)`;
    }
  }

  public startMove(circle: any, e: any) {
    circle.canMove = true;
    console.log('Can move');
  }

  public stopMove(circle: any, e: any) {
    circle.canMove = false;
    console.log('Stop move');
  }

  public doMove(circle: any, e: any) {
    let x = 0;
    let y = 0;
    if (circle.canMove) {
      let elem = e.srcElement;
      let val = elem.style.transform;

      let xVal = val.replace(/translate\($/g, '');

      console.log(xVal);
      e.srcElement.style.transform = 'translate(-200px, -200px)';
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/app";

@mixin move($x, $y){
  transform: translate($x, $y);
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
  transition: 500ms;
  opacity: 0;
  border: 1px solid rgba(0,0,0,0.2);
}
.mini-circle-text {
  font-family: $belleza-font;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
.begin {
  opacity: 1;
  transition: 1000ms;
}
</style>
