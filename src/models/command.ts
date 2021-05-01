import { Component } from 'vue';

export interface CommandInterface {
  id: number;
  component: Component;
  active: boolean;
}

export enum UnixCommands {
  LS = 'ls',
  PWD = 'pwd',
  CD = 'cd',
  LL = 'll',
  LSLA = 'ls -la',
  CLEAR = 'clear',
}
