export class Skill {
  icon: any;
  name: string;
  items: string[];

  constructor(icon: any, name: string, items: string[]) {
    this.icon = icon;
    this.name = name;
    this.items = items;
  }
}
