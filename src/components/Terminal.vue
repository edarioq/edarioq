<template>
  <section class="terminal">
    <span class="terminal__sign">$ ></span>
    <input
      class="terminal__input"
      v-model="command"
      type="text"
      @keyup.enter="enterClicked"
      ref="terminal"
      tabindex="1"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Terminal extends Vue {
  public command: string = '';

  constructor() {
    super();
  }

  public mounted() {
    this.$nextTick(() => {
      const term = this.$refs.terminal as HTMLInputElement;
      term.focus();
    });
  }

  public enterClicked(): void {
    console.debug(this.command);
    this.command = '';
  }
}
</script>

<style scoped lang="scss">
$module: 'terminal';

.#{$module} {
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-column: 1 / span 13;
  position: relative;
  &__sign {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background-color: transparent;
    color: var(--green);
    user-select: none;
  }
  &__input {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border: none;
    padding: 10px 0;
    outline: none;
    background-color: transparent;
    color: var(--aqua);
    user-select: none;
    letter-spacing: 0.1rem;
    padding-left: 5px;
  }
}
</style>
