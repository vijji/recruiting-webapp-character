export class AttributeCharacterMapper {
  constructor(characterAttributes) {
    this.characterAttributes = characterAttributes;
  }

  performMatcher(attributesToBeChecked) {
    let matcher = [];
    this.characterAttributes.forEach((character) => {
      matcher[character.getName()] = this.metRequirements(character, attributesToBeChecked);
    });
    return matcher;
  }
  metRequirements(character, attributesToBeChecked) {
    const keys = Object.keys(attributesToBeChecked);
    for (const key of keys) {
      if (attributesToBeChecked[key].getValue() < character.getAttributes()[key].getValue()) {
        return false;
      }
    }

    return true;
  }
}
