import Vue from 'vue';

export enum EventBusEvents {
  trigger = 'on',
}

export const eventBus = new Vue();
