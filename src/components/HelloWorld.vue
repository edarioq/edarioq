<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul class="list">
      <li
        class="list-item"
        v-for="(link, index) in links"
        v-bind:key="index">
        <a v-bind:href=link target="_blank">{{ link }}</a>
      </li>
    </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['title', 'links']),
    // other stuff
  },
})
export default class HelloWorld extends Vue {

/*   public title!: string;
  public links!: []; */

/*   public get getMessage(): string {
    return this.title;
  }

  public get getLinks(): [] {
    return this.links;
  } */
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  display: flex;
  flex-direction: column;
}
.list-item {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
