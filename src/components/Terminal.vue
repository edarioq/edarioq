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
import { CommandInterface } from '../models/command';
import Command from './Command.vue';

@Component({
  components: {
    Command,
  },
})
export default class Terminal extends Vue {
  public commands: CommandInterface[] = [
    { id: 1, component: Command, active: true },
  ];
  private index = 1;

  constructor() {
    super();
  }

  protected mounted() {
    eventBus.$on(EventBusEvents.trigger, (res: string) => {
      if (res === 'enter') {
        this.index += 1;
        this.commands.forEach((cmd) => (cmd.active = false));
        this.commands.push({
          id: this.index,
          component: Command,
          active: true,
        });
      }
    });
  }
}
</script>

<style scoped lang="scss">
$module: 'terminal';

.#{$module} {
}
</style>
