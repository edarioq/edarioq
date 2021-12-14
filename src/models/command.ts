import { Component } from 'vue';

export interface CommandInterface {
  id: number;
  component: Component;
  active: boolean;
}

export enum UnixCommands {
  ENTER = 'enter',
  LS = 'ls',
  PWD = 'pwd',
  CD = 'cd',
  CDH = 'cd home',
  CDA = 'cd about',
  CDP = 'cd projects',
  LL = 'll',
  LSLA = 'ls -la',
  CLEAR = 'clear',
  MKDIR = 'mkdir',
  HELP = 'help',
  CDDOT = 'cd ..',
  CRTLC = 'ctrl+c',
}
