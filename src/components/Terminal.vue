<template>
  <section class="terminal">
    <div class="terminal__command">
      <template v-for="command in commands">
        <component
          :is="command.component"
          :key="command.id"
          :command="command"
        ></component>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventBus, EventBusEvents } from '../event-bus';
import { CommandInterface, UnixCommands } from '../models/command';
import Command from './Command.vue';

@Component({
  components: {
    Command,
  },
})
export default class Terminal extends Vue {
  public commands: CommandInterface[] = [];
  private index = 1;

  constructor() {
    super();
  }

  protected mounted() {
    this.initCommands();
    this.listenForUnixCommands();
  }

  private initCommands(): void {
    this.index = 1;
    this.commands.length = 0;
    setTimeout(
      () =>
        (this.commands = [{ id: this.index, component: Command, active: true }])
    );
    eventBus.$emit(EventBusEvents.trigger, 'focus');
  }

  private listenForUnixCommands(): void {
    eventBus.$on(EventBusEvents.trigger, (command: string) => {
      if (command === 'focus') {
        return;
      } else if (command === UnixCommands.ENTER) {
        this.enterCommand();
        return;
      } else if (command === UnixCommands.CLEAR) {
        this.initCommands();
        return;
      }
    });
  }

  private enterCommand(): void {
    this.index += 1;
    this.commands.forEach((cmd) => (cmd.active = false));
    this.commands.push({ id: this.index, component: Command, active: true });
  }
}
</script>

<style scoped lang="scss">
$module: 'terminal';

.#{$module} {
}
</style>
