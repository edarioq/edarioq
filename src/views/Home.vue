<template>
  <main class="home">
    <section class="welcome">
      <h1 class="title">Software Engineer</h1>
      <p class="tagline">I build web applications</p>
    </section>
    <section class="skills">
      <div class="frontend">
        <div class="list-label">Frontend</div>
        <ul class="list">
          <li>HTML5</li>
          <li>CSS (SASS)</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>AngularJS & Angular</li>
          <li>Vue.js</li>
        </ul>
      </div>
      <div class="backend">
        <div class="list-label">Backend</div>
        <ul class="list">
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Flask</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import "@/sass/app";
.home {
  padding: 50px 0;
}
.welcome {
  font-size: 60px;
  text-align: center;
}
.title {
  font-size: 60px;
  text-align: center;
}
.tagline {
  font-size: 20px;
  margin: 25px 0;
}
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.list-label {
  margin-bottom: 10px;
}
.list {
  
}
</style>
