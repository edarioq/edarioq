<template>
  <section class="command" :class="{ 'command--disabled': !command.active }">
    <span class="command__sign">$ ></span>
    <input
      class="command__input"
      v-model="input"
      type="text"
      @keyup.enter="enterClicked(input)"
      ref="cmd"
      :tabindex="command.id"
      :disabled="!command.active"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { eventBus, EventBusEvents } from '../event-bus';
import { CommandInterface, UnixCommands } from '../models/command';

@Component
export default class Command extends Vue {
  @Prop({ type: Object }) public command!: CommandInterface;
  public input: string = '';
  public unixCommands: { [key: string]: UnixCommands } = UnixCommands;

  constructor() {
    super();
  }

  public mounted(): void {
    this.focusInput();
  }

  public focusInput(): void {
    this.$nextTick(() => {
      const input = this.$refs.cmd as HTMLInputElement;
      if (input && this.command.active) {
        input.focus();
      }
    });
  }

  public created(): void {
    eventBus.$on(EventBusEvents.trigger, (focus: string) => {
      if (focus === 'focus') {
        this.focusInput();
      }
    });
  }

  public enterClicked(input: string): void {
    eventBus.$emit(EventBusEvents.trigger, 'enter');

    const value = input.trim().toLowerCase();
    if (value === UnixCommands.CLEAR) {
      this.input = '';
    }

    const keys = Object.keys(UnixCommands);
    for (const k of keys) {
      if (this.unixCommands[k] === value) {
        console.debug(`Command: ${this.unixCommands[k]}`);
        eventBus.$emit(EventBusEvents.trigger, this.unixCommands[k]);
      }
    }
    this.focusInput();
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
  }
  &--disabled {
    user-select: none;
    pointer-events: none;
    cursor: none;
  }
}
</style>
