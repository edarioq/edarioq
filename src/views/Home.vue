<template>
  <main class="main-container home">
    <section class="welcome">
      <h1 class="title">Sup</h1>
      <p class="tagline">I build cool shit for the <span class="alt-font">web</span>, with a skill set that consists of:</p>
    </section>

    <section class="skills">
      <div v-for="(skill, i) in skills" v-bind:key="i">
        <div class="list-label blue-line">
          <font-awesome-icon class="icon" :icon="skill.icon" />
          {{ skill.name }}
        </div>
        <ul class="list">
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

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Home extends Vue {

  public skills: object[];

  constructor() {
    super();

    this.skills = [
      {
        icon: faEdit,
        name: 'Design',
        items: [
          'UI Prototyping',
          'Invision',
          'Sketch',
          'Zeplin',
        ],
      },
      {
        icon: faCode,
        name: 'Frontend',
        items: [
          'HTML5',
          'CSS/SASS',
          'JavaScript/Typescript',
          'AngularJS/Angular',
          'Vue.js',
        ],
      },
      {
        icon: faTerminal,
        name: 'Backend',
        items: [
          'Node.js/Express',
          'Python/Flask',
          'MongoDB',
          'PostgreSQL',
        ],
      },
      {
        icon: faChartLine,
        name: 'Marketing',
        items: [
          'SEO/SEM',
          'Conversion Optimization',
          'Google Analytics',
        ],
      },
    ];
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/app";
.home {
  padding: 50px 0;
}
.welcome {
  font-size: 60px;
  text-align: center;
  margin-bottom: 100px;
  grid-column: 1/span 12;
}
.title {
  font-family: $belleza-font;
  font-size: 300px;
  text-align: center;
}
.tagline {
  font-size: 20px;
  margin: 25px 0;
}
.skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/span 12;
}
.list-label {
  font-family: $belleza-font;
  font-size: 22px;
  margin-bottom: 15px;
  position: relative;
}
.icon {
  width: 12px;
  margin-right: 5px;
}
.list {
  
}
.list-item {
/*   font-size: 16px;
  color: $black; */
}
</style>
