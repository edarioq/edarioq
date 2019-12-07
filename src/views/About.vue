<template>
  <main class="about">
    <section class="info">
      <div class="pic">
        <img class="me" src="/img/edgar-quintero.jpg" alt="Edgar Quintero" />
        <caption class="context">
          My name is Edgar and I have over 10 years of experience in the Digital landscape.
          For 6 of those years I've worked in Digital Marketing, designing and implementing
          organic search engine strategies for major brands such as P&G, Pantene,
          Diners Club International, and many (many) more. More recently, for the past 4 years, I've
          shifted over into Software Development, primarly as a Frontend Developer but also
          in the backend when possible. I love building digital products.
          I am passionate about technology, have an eye for design and I enjoy
          finding simple solutions to complex problems.
        </caption>
      </div>
    </section>

    <section class="timeline">
      <div
        class="line circle"
        v-for="(time, i) in timeline"
        :key="i"
        :class="{ 'is-last' : i === timeline.length - 1 }"
        v-on:click="loadNext(i)">
        <div class="expl" :class="isEven(i) ? 'right' : 'left'">
          <div class="box">
            <div class="label">{{ time.label }}</div>
            <div class="text">{{ time.text }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  public timeline: object[];

  constructor() {
    super();

    this.timeline = [
      {
        label: '1983',
        text: 'Born on the 20th of January in Barranquilla, Colombia.',
      },
      {
        label: '1992',
        text: `Moved to Atlanta, Georgia. USA.`,
      },
      {
        label: '2003',
        text: `Moved to Cartagena, Colombia`,
      },
      {
        label: '2004',
        text: `Move to Barranquilla, Colombia`,
      },
      {
        label: '2006',
        text: `Moved to Bogota, Colombia`,
      },
      {
        label: '2008',
        text: `Landed a job as a Web Designer/SEO Consultant in an Agency`,
      },
      {
        label: '2010',
        text: `Landed my second job in SEO in Intergrupo`,
      },
      {
        label: '2013',
        text: `Landed a corporate job in GroupM as Account Executive`,
      },
      {
        label: '2014',
        text: `Started to code`,
      },
      {
        label: '2015',
        text: `Learned AngularJS`,
      },
      {
        label: '2017',
        text: `Landed a contract as a Frontend Developer for a startup in the US`,
      },
      {
        label: '2018',
        text: `Moved to Medellin`,
      },
    ];
  }

  public isEven(i: number): boolean {
    return i % 2 === 0;
  }

  public loadNext(i: number): void {
    console.log(`next ${i}`);
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/app";
.about {
  padding: 50px 0;
}
.pic {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.me {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 1px solid $white;
  margin: 0 auto 25px;
}
.context {
  font-size: 20px;
  max-width: 660px;
  line-height: 1.8;
  margin: 0 auto 25px;
  padding: 0 50px;
}
.timeline {
  display: grid;
  justify-content: center;
  margin: 100px 0;
}
.line {
  height: 180px;
  width: 1px;
  background-color: $black;
  border-left: 1px solid $black;
  position: relative;
  z-index: 1;
  &.is-last:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);
    height: 2px;
    width: 22px;
    background-color: $black;
  }
}
.circle {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 22px;
    height: 22px;
    background-color: $black;
    border-radius: 50%;
    z-index: 100;
  }
  &:hover {
    cursor: pointer;
  }
}
.expl {
  position: absolute;
  top: -20px;
  width: 250px;
  &.left {
    right: 20px;
    .label,
    .text {
      text-align: right;
    }
  }
  &.right {
    left: 20px;
    .label,
    .text {
      text-align: left;
    }
  }
}
.box {
  width: 100%;
  max-width: 250px;
  padding: 15px 20px;

  border-radius: 8px;
  box-sizing: border-box;
  background-color: $white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}
.label {
  font-family: $belleza-font;
  font-size: 18px;
  margin-bottom: 5px;
  width: 100%;
}
.text {
  font-size: 14px;
  width: 100%;
}
</style>
