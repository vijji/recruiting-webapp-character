import Attributes from './Attributes';
import Characters from './Characters';
import { AttributeCharacterMapper } from '../lib/AttributeCharacterMapper';
import { FetchCharacters } from '../lib/FetchCharacters';
import { useState } from 'react';
import Skills from './Skills';
import '../assets/CharacterSheetApp.css';

function CharacterSheetApp() {
  const characters = new FetchCharacters().createCharacters();
  const attributeCharacterMapper = new AttributeCharacterMapper(characters);

  const [attributeMapper, setAttributeMapper] = useState([]);
  const [attributes, setAttributes] = useState([]);
  function onAttributeChangeHandler(data) {
    setAttributeMapper(attributeCharacterMapper.performMatcher(data));
    setAttributes(data);
  }

  return (
    <div className="Component-section">
      <div className="Component">
        <Attributes onAttributeChange={onAttributeChangeHandler} />
      </div>

      <div className="Component">
        <Characters attributesMatcher={attributeMapper} />
      </div>

      <div className="Component">
        <Skills attributes={attributes} />
      </div>
    </div>
  );
}

export default CharacterSheetApp;
