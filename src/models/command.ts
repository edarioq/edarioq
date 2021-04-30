import { Component } from 'vue';

export interface CommandInterface {
  id: number;
  component: Component;
  active: boolean;
}
