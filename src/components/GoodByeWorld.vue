<template>
  <div class="hello">
    <h1>Good-bye world!</h1>
    <form @submit.prevent="addLink">
      <input class="link-input" type="text" v-model="newLink" placeholder="Add a link">
    </form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapMutations(['storeLink']),
  },
})

export default class GoodByeWorld extends Vue {

  public newLink: string;

  constructor() {
    super();
    this.newLink = '';
  }

  public addLink(): void {
    console.log(this.newLink);
    this.$store.dispatch('storeLink', this.newLink)
      .then(() => {
        this.newLink = '';
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>

<style scoped lang="scss">
.link-input {
  font-size: 20px;
  color: #444;
  border: 1px solid #999;
  padding: 5px 10px;
  border-radius: 5px;
  min-width: 500px;
  margin-top: 20px;
  &::placeholder {
    color: #666;
  }
  &:active,
  &:focus {
    box-shadow: 0 0 2px 4px #f1f1f1;
  }
}
</style>
