<template>
  <section class="command">
    <span class="command__sign">$ ></span>
    <input
      class="command__input"
      v-model="input"
      type="text"
      @keyup.enter="enterClicked"
      ref="cmd"
      :tabindex="command.id"
      :disabled="!command.active"
      v-class="{ disabled: !command.active }"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { eventBus, EventBusEvents } from '../event-bus';
import { CommandInterface } from '../models/command';

@Component
export default class Command extends Vue {
  @Prop({ type: Object }) public command!: CommandInterface;
  public input: string = '';

  constructor() {
    super();
  }

  public mounted(): void {
    console.debug(this.command);
    this.focusInput();
  }

  public focusInput(): void {
    this.$nextTick(() => {
      const input = this.$refs.cmd as HTMLInputElement;
      input.focus();
    });
  }

  public created(): void {
    eventBus.$on(EventBusEvents.trigger, () => this.focusInput());
  }

  public enterClicked(): void {
    this.input = '';
  }
}
</script>

<style scoped lang="scss">
$module: 'command';

.#{$module} {
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-column: 1 / span 13;
  position: relative;
  cursor: none;
  &__sign {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background-color: transparent;
    color: var(--green);
    user-select: none;
    pointer-events: none;
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
    letter-spacing: 0.1rem;
    padding-left: 5px;
    &.disabled {
      user-select: none;
      pointer-events: none;
    }
  }
}
</style>
