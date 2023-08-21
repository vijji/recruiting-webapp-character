import { CLASS_LIST } from '../consts';
import { Attribute } from '../model/Attribute';
import { Classes } from '../model/Classes';
export class FetchCharacters {
  createCharacters() {
    const classes = Object.entries(CLASS_LIST);
    let characters = [];
    for (const [key, attributes] of classes) {
      let listAttributes = [];
      const properties = Object.entries(attributes);
      for (const [name, value] of properties) {
        listAttributes.push(new Attribute(name, value));
      }
      characters.push(new Classes(key, listAttributes));
    }

    return characters;
  }
}
