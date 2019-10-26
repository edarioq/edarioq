<template>
  <main class="about">
    <section class="info">
      <div class="pic">
        <img class="me" src="/img/edgar-quintero.jpg" alt="Edgar Quintero" />
        <caption class="context">
          My name is Edgar and I have over 10 years of experience in the Digital landscape.
          For 6 of those years I've worked in Digital Marketing, designing and implementing
          organic search engine strategies for major brands such as P&G, Pantene,
          Diners Club International, and many (many) more. More recently however I've
          shifted over into Software Development, primarly as a Frontend Developer but also
          in the backend when possible. I love building digital products for people,
          nor just for machines. I truly love technology, have an eye for design and I get a kick
          out of solving complex problems, hence the fall into Software Development and Frontend
          was a natural fit.
        </caption>
      </div>
      <div class="learn-more">Interested in knowing more about me? Click on the clock.</div>
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
        text: 'I was born on the 20th of January in Barranquilla, Colombia.',
      },
      {
        label: '1992',
        text:
          'Moved to the Atlanta, Georgia when I was 7 years old. Did all schools from Elementary to High School.',
      },
      {
        label: '2003',
        text:
          'Took an unexpected trip to Cartagena, Colombia and\
          ended up staying for a year.',
      },
      {
        label: '2004',
        text:
          'Moved to Barranqulla and lived here for about \
          a year and a half. Did some reflectioning on life,\
          got in touch with my Colombian roots, got a nice girlfriend\
          and a part time job. Had a blast but geez is it hot.',
      },
      {
        label: '2006',
        text:
          'Moved to Bogota and lived here for way too long.\
          Took an interest in Tech and the Web. Ended up hating Bogota\
          but I started to grow professionally.',
      },
      {
        label: '2008',
        text:
          'Got my first "real" job in Bogota as as Junior \
          Web Designer/SEO Consultant. (I know weird). Learned HTML\
          and CSS.',
      },
      {
        label: '2010',
        text:
          'Got my second "real" job as a Search Specialist,\
          moslty building organic search strategies (SEO) \
          and Google Analytics for huge brands such as Diners\
          Club International. Did some college, worked and studied at the same time.',
      },
      {
        label: '2013',
        text:
          'Got my third and last office job at GroupM.\
          I took on some major clients and two huge regional projects.\
          Learned a lot but ultimately I was disappointed at office live and burned out \
          at long work hours, lots of studying, and most importantly the nature of how\
          marketing really works at a high level.',
      },
      {
        label: '2014',
        text:
          'I took a major break from everything, quit my job at the time and did some\
          small final gigs for small agencies for a few months. \
          I began doing lots of freelance, and decied to dedicate everything \
          to jumping on the tech bandwagon. I learned JavaScript and ES6.',
      },
      {
        label: '2015',
        text:
          'Shifted from DM into Web Development, found my calling in Frontend\
          and took on major contracts for small startups in the US,\
          still doing some Freelance for local clients. Learned Angular.',
      },
      {
        label: '2017',
        text:
          'Took on a long term full time contract with a start up called Hello Insight\
          where I get to build the Frontend of a Web Application in\
          AngularJS/Angular, Python and Flask, that evalutes Youth Development\
          Programs for kids across the US.',
      },
      {
        label: '2018',
        text:
          'Moved to Medellin where I work remotely and travel abroad often.\
          I get to enjoy lovely weather year round and beautiful,\
          friendly people. Learned Python. Woot!',
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
  max-width: 660px;
  line-height: 1.6;
  margin: 0 auto 25px;
  padding: 0 50px;
}
.learn-more {
  text-align: center;
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
