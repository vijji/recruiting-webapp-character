export class Attribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.modifier = 0;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getModifier() {
    return this.modifier;
  }

  incrementModifier() {
    this.modifier = this.value % 2 === 0 ? this.modifier + 1 : this.modifier;
  }
  decrementModifier() {
    this.modifier = this.value % 2 !== 0 ? this.modifier - 1 : this.modifier;
  }
}
