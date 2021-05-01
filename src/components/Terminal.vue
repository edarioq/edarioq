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
import { CommandInterface } from '../models/command';
import Command from './Command.vue';

@Component({
  components: {
    Command,
  },
})
export default class Terminal extends Vue {
  public active = false;
  public commands: CommandInterface[] = [
    { id: 1, component: Command, active: true },
  ];

  constructor() {
    super();
  }

  protected mounted() {
    this.commands.forEach((cmd) => (cmd.active = false));
    this.commands.push({ id: 2, component: Command, active: false });
    this.commands.push({ id: 3, component: Command, active: true });
  }
}
</script>

<style scoped lang="scss">
$module: 'terminal';

.#{$module} {
}
</style>
