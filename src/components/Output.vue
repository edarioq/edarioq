<template>
  <section class="output">
    <span class="output__message" v-if="typeof outputMessage === 'string'">
      {{ outputMessage }}
    </span>
    <ul v-if="Array.isArray(outputMessage)" class="output__list">
      <li
        class="output__list__message"
        v-for="list in outputMessage"
        :key="list"
      >
        {{ list }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { UnixCommands } from '../models/command';
import Command from './Command.vue';

@Component({
  components: {
    Command,
  },
})
export default class Terminal extends Vue {
  @Prop({ type: String }) public output!: UnixCommands;

  public unixCommands: { [key: string]: UnixCommands } = UnixCommands;
  public outputMessage: string | string[] = '';

  constructor() {
    super();
  }

  public mounted(): void {
    this.outputMessage = this.processOutput(this.output);
  }

  public processOutput(command: UnixCommands): string | string[] {
    if (command === UnixCommands.HELP) {
      const keys: string[] = Object.keys(UnixCommands);
      return `${keys.map((k) => this.unixCommands[k]).join(', ')}`;
    }
    if (command === UnixCommands.PWD) {
      return '/Users/edarioq';
    }
    if (
      command === UnixCommands.LS ||
      command === UnixCommands.LL ||
      command === UnixCommands.LSLA
    ) {
      return ['home', 'about', 'projects'];
    }
    if (
      command === UnixCommands.CDH ||
      command === UnixCommands.CDA ||
      command === UnixCommands.CDP
    ) {
      return 'Feature coming soon....';
    }
    return `Command ${command} is recognized but not yet supported`;
  }
}
</script>

<style scoped lang="scss">
$module: 'output';

.#{$module} {
  margin: 0;
  padding: 0 5px;
  grid-column: 2;
  &__list {
    margin: 0;
    &__message {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  &__message {
    font-size: 1.1rem;
    line-height: 1.5;
  }
}
</style>
