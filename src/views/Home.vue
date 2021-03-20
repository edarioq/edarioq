<template>
  <main class="main-container home">
    <section class="welcome">
      <div class="presentation" >
        <div class="name">
          <span class="brand">
            My name is Edgar
          </span>
        </div>
      </div>
      <p class="tagline">
        I'm a developer that enjoys building awesome digital experiences.
      </p>
    </section>

    <section class="skills">
      <div v-for="(skill, i) in skills" v-bind:key="i">
        <div class="list-label blue-line">
          <font-awesome-icon class="icon" :icon="skill.icon" />
          {{ skill.name }}
        </div>
        <ul class="skills-list">
          <li
            class="list-item"
            v-for="(item, i) in skill.items"
            v-bind:key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit, faCode, faTerminal, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Skill } from '../models/skills';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Home extends Vue {
  public skills: Skill[] = [];

  constructor() {
    super();

    const design = new Skill(faEdit, 'Design', [
      'Sketch',
      'Invision',
      'Zeplin',
    ]);
    const frontend = new Skill(faCode, 'Frontend', [
      'JavaScript / Typescript',
      'HTML & CSS/SASS',
      'AngularJS / Angular',
      'Vue.js',
    ]);
    const backend = new Skill(faTerminal, 'Backend', [
      'Node.js / Express',
      'Python / Flask',
      'MongoDB',
      'PostgreSQL',
    ]);
    const digitalMarketing = new Skill(faChartLine, 'Dev Ops', [
      'Git',
      'Jenkins',
      'Docker',
    ]);

    this.skills.push(design, frontend, backend, digitalMarketing);
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: 50px 0;
}
.welcome {
  text-align: center;
  margin-bottom: 100px;
  grid-column: 1/span 12;
  @include phone {
    margin-bottom: 25px;
  }
}
.presentation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.greeting {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  opacity: 1;
  position: relative;
  z-index: 1000;
  height: 50vh;
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2rem;
  font-weight: 700;
  z-index: 100;
  height: 25vh;
  @include phone {
    font-size: 2.2rem;
    padding: 0 25px;
    height: auto;
    margin-bottom: 25px;
  }
}
.tagline {
  font-size: 1.4rem;
  margin: 0 auto 25px;
  line-height: 1.8;
  @include phone {
    font-size: 1.2rem;
    padding: 0 25px;
  }
}
.skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/span 12;
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    padding: 0 50px;
  }
  @include phone {
    grid-template-columns: 1fr;
  }
}
.skills-list {
  @include phone {
    margin-bottom: 20px;
  }
}
.list-label {
  font-family: $belleza-font;
  font-size: 1.5rem;
  margin-bottom: 15px;
  position: relative;
}
.list-item {
  font-size: 1rem;
}
.icon {
  width: 12px;
  margin-right: 5px;
}
</style>
