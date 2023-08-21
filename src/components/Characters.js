import { FetchCharacters } from '../lib/FetchCharacters';
import AttributesCollection from './AttributesCollection';
import { useState } from 'react';
import '../assets/Characters.css';
function Characters({ attributesMatcher }) {
  const characters = new FetchCharacters().createCharacters();
  const [showAttributes, setShowAttributes] = useState([]);

  function showAttributesHandler(index) {
    const newValue = [...showAttributes];
    newValue[index] = !newValue[index];
    setShowAttributes(newValue);
  }

  return (
    <div>
      {characters.map((character, index) => {
        return (
          <div key={index} className="Character" onClick={() => showAttributesHandler(index)}>
            {character.getName()}

            {attributesMatcher[character.getName()] && (
              <input type="checkbox" className="Green-Checkbox" readOnly />
            )}

            <div className="Expandable-section">
              {showAttributes[index] && (
                <AttributesCollection attributesArray={character.getAttributes()} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
