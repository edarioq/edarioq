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
      @mousemove="moveCircle(circle, $event)"
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
  public mouseLocation: {x: number, y: number};

  constructor() {
    super();
    this.minis = this.generateMinis();
    this.mouseLocation = {x: 0, y: 0};
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
      window.innerWidth || 0,
    );
    const maxHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );

    return {
      x: Math.round((maxWidth / 2) - 100),
      y: Math.round((maxHeight / 2) - 100),
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
    if (circle.canMove) {
      this.mouseLocation.x = e.pageX;
      this.mouseLocation.y = e.pageY;
      console.log('Can move');
      console.log(this.mouseLocation);
    }
  }

  public stopMove(circle: any, e: any) {
    circle.canMove = false;
    console.log('Stop move');
  }

  public getMouseMovement(e: any) {
    return {
      x: this.mouseLocation.x - e.pageX,
      y: this.mouseLocation.y - e.pageY,
    };
  }

  public getCurrentLocation(e: any) {
    const transform = e.srcElement.style.transform;
    const position = transform.replace(/(translate\()|(\)$)/g, '');
    const xPos = parseInt(position.replace(/\px.*/g, ''), 10);
    const yPos = parseInt(position.replace(/^[^_]*, |(\px)/g, ''), 10);
    return { x: xPos, y: yPos };
  }

  public moveCircle(circle: any, e: any) {
    e.preventDefault();
    if (circle.canMove) {
      // The current position
      const xPos = this.getCurrentLocation(e).x;
      const yPos = this.getCurrentLocation(e).y;

      // Get the mouse movement
      const xMov = this.getMouseMovement(e).x;
      const yMov = this.getMouseMovement(e).y;

      /* console.log(`xPos: ${xPos}`);
      console.log(`xMos: ${xMov}`);
      console.log(`New Location: ${xPos - xMov}`);
      console.log(`yPos: ${yPos}`);
      console.log(`yMos: ${yMov}`);
      console.log(`New Location: ${yPos - yMov}`);
      console.log('----------------') */

      e.srcElement.style.transform = `translate(${xPos - xMov}px, ${yPos - yMov}px)`;
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
