import Vue from 'vue';

export enum EventBusEvents {
  trigger = '',
}

export const eventBus = new Vue();
