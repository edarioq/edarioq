export class Skill {
  public icon: any;
  public name: string;
  public items: string[];

  constructor(icon: any, name: string, items: string[]) {
    this.icon = icon;
    this.name = name;
    this.items = items;
  }
}
