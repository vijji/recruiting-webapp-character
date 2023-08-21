export class Classes {
  constructor(name, attributesArray) {
    this.name = name;
    this.attributes = attributesArray;
  }

  getName() {
    return this.name;
  }

  getAttributes() {
    return this.attributes;
  }
}
