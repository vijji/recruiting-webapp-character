import { ATTRIBUTE_LIST } from '../consts';
import { Attribute } from '../model/Attribute';

export class FetchAllAttributes {
  createList() {
    const data = ATTRIBUTE_LIST;
    let list = [];
    data.forEach((attributeName) => {
      list.push(new Attribute(attributeName, 10));
    });

    return list;
  }
}
