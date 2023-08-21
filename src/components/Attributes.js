import { FetchAllAttributes } from '../lib/FetchAllAttributes';
import { useState } from 'react';
import AttributesCollection from './AttributesCollection';

function Attributes({ onAttributeChange }) {
  let attributesArray = new FetchAllAttributes().createList();
  const [data, setData] = useState(attributesArray);
  function onIncrementHandler(index) {
    const updatedData = [...data];
    updatedData[index].value = updatedData[index].value + 1;
    updatedData[index].incrementModifier();
    setData(updatedData);
    onAttributeChange(updatedData);
  }
  function onDecrementHandler(index) {
    const updatedData = [...data];
    updatedData[index].value = updatedData[index].value - 1;
    updatedData[index].decrementModifier();
    setData(updatedData);
    onAttributeChange(updatedData);
  }
  const modifierProp = { onIncrementHandler, onDecrementHandler };

  return <AttributesCollection attributesArray={data} modifierProp={modifierProp} />;
}

export default Attributes;
