<template>

  <main class="work">
    <header class="work-header">
      <nav class="nav">
        <div
          class="nav-left bg"
          v-on:click="navigate('left')">
          <font-awesome-icon
            class="nav-arrow"
            :icon="icons.left_nav" />
        </div>
        <div
          class="nav-right bg"
          v-on:click="navigate('right')">
          <font-awesome-icon
            class="nav-arrow"
            :icon="icons.right_nav" />
        </div>
      </nav>
      <div class="title">{{ activeWork.name }}</div>
      <a
        :href="activeWork.link"
        class="link"
        target="_blank">
        Visit Site
        <font-awesome-icon class="link-icon" :icon="icons.link" />
      </a>
    </header>
    <section class="main-work">
      <div
        class="main-img">
        <div class="browser-bar">
          <div class="red-circle"></div>
          <div class="yellow-circle"></div>
          <div class="green-circle"></div>
        </div>
        <img
          class="active-img"
          :src="'/img/' + activeWork.img" :alt="activeWork.name">
      </div>
      <div class="main-desc">
        <div class="name">
          <div class="label">Project</div>
          <div class="text">{{ activeWork.name }}</div>
        </div>
        <div class="type">
          <div class="label">Type</div>
          <div class="text">{{ activeWork.type }}</div>
        </div>
        <div class="date">
          <div class="label">Date</div>
          <div class="text">{{ activeWork.date }}</div>
        </div>
        <div class="tags">
          <div class="label">Technologies Used</div>
          <ul class="main-tags">
            <li
              class="tag no-dot"
              v-for="(tag, i) in activeWork.tags"
              :key="i">
              {{ tag }}
            </li>
          </ul>
        </div>
        <div class="description">
          <div class="label">Description</div>
          <div class="desc">{{ activeWork.desc }}</div>
        </div>
      </div>
    </section>

    <section class="work-options">
      <div class="work-1">
        <div class="work-1-img"></div>
        <div class="work-1-title"></div>
      </div>
      <div class="work-2">
        <div class="work-1-img"></div>
        <div class="work-1-title"></div>
      </div>
      <div class="work-3">
        <div class="work-1-img"></div>
        <div class="work-1-title"></div>
      </div>
    </section>
  </main>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLink, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Project } from '@/models/project';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Work extends Vue {

  public work: Project[] = [];
  public activeWork: Project;
  public icons: object = {};

  constructor() {
    super();

    this.icons = {
      link: faLink,
      left_nav: faArrowLeft,
      right_nav: faArrowRight,
    };

    this.work = [
      {
        name: 'Hello Insight (App)',
        type: 'Web Application',
        date: '2015 - Current',
        link: 'https://hi.helloinsight.org',
        img: 'hello-insight-app.png',
        tags: [
          'AngularJS',
          'Angular',
          'JS',
          'TS',
          'CSS / SASS',
          'Python / Flask',
          'PostgreSQL',
          'Git',
          'Node',
          'Invision',
          'Zeplin',
          ],
        desc: 'Hello Insight is a Web App that evaluates Youth Development Programs\
        across the US. It taps into an Analytics engine of thousands of Youths already in the system\
        to produce highly detailed, research backed, easy to read reports that helps on the ground staff\
        improve their programs, thereby impacting the positive outcome in Kids lifes.',
        active: true,
      },
      {
        name: 'Hello Insight (Website)',
        type: 'Marketing Website',
        date: '2017 - Current',
        link: 'https://helloinsight.org',
        img: 'hello-insight-website.png',
        tags: [
          'Vue.js',
          'JS',
          'CSS / SASS',
          'Node / Express',
          'Butter CMS API',
          'Pre Rendering for SEO',
          'Git',
          'Invision',
          'Google Analytics',
          ],
        desc: 'The Website was built using Vue.js and Express. The site connects to Butter\
        to load content from their API. It uses Axios to make requests to the backend, which\
        was built with Node and Express. It has customs Google Analytics goal tracking to \
        optimize conversions. It\'s also fully responsive on any device except IE.',
        active: false,
      },
    ];

    this.activeWork = this.work[0];
  }

  public navigate(dir: string): void {
    if (dir === 'left') {
      this.activeWork = this.work[0];
    }
    if (dir === 'right') {
      this.activeWork = this.work[1];
    }
  }

  public setActiveProject(): void {
    this.work.map((item) => {
      if (item.active) {
        this.activeWork = item;
      }
    });
  }

}
</script>

<style scoped lang="scss">
@import '@/sass/app';

$browser-bar-height: 40px;

.work {
  padding: 50px 0;
}
.work-header {
  display: flex;
  justify-content: center;
  margin: 0 auto 35px;
  position: relative;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  display: flex;
  align-items: center;
}
.nav-left {
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
}
.nav-right {
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
}
.nav-arrow {
  z-index: 50;
}
.bg {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    background-color: $white;
    z-index: -1;
    border-radius: 50%;
    border: 1px solid rgba($black, 0.2);
    transition: 300ms;
  }
  &:hover {
    &:after {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
.title {
  font-family: $belleza-font;
  font-size: 30px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 3px;
    background-color: $blue;
    border-radius: 10%;
  }
}
.link {
  font-size: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  text-decoration: none;
}
.link-icon {
  margin-left: 5px;
}
.main-work {
  margin: 0 auto 80px;
}
.main-img {
  width: 100%;
  height: 100%;
  margin: 0 auto 35px; 
  position: relative;
}
.browser-bar {
  position: relative;
  width: calc(100% - 2px);
  margin: 0 auto;
  height: $browser-bar-height;
  border-top: 1px solid rgba($black, 0.2);
  border-left: 1px solid rgba($black, 0.2);
  border-right: 1px solid rgba($black, 0.2);
  box-shadow: 0 1px 2px 0 rgba($black, 0.2);
  background-color: $white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: -1;
}
@mixin circle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.red-circle {
  @include circle;
  background-color: #ff6059;
  border: 1px solid #e2423c;
  left: 20px;
}
.yellow-circle {
  @include circle;
  left: 40px;
  background-color: #ffbd2e;
  border: 1px solid #eaa924;
}
.green-circle {
  @include circle;
  left: 60px;
  background-color: #29ce42;
  border: 1px solid #18ab28;
}
.active-img {
  width: calc(100% - 2px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba($black, 0.2);
  border-left: 1px solid rgba($black, 0.2);
  border-right: 1px solid rgba($black, 0.2);
  border-bottom: 1px solid rgba($black, 0.2);
}
.main-desc {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 10px;
  line-height: 1.6;
}
.name {
  grid-column-start: 1;
}
.type {
  grid-column-start: 2;
}
.date {
  grid-column-start: 3;
}
.tags {
  grid-column-start: 4;
  grid-row: 1/span 2;
}
.main-tags {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
}
.tag {
  font-size: 12px;
  color: $gray;
  background-color: $black;
  padding: 3px 10px;
  border-radius: 3px;
  margin-bottom: 8px;
  &:not(:last-child) {
    margin-right: 10px;
  }
}
.description {
  grid-column: 1/span 3;
  position: relative;
}
.label {
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 10px;
}

</style>