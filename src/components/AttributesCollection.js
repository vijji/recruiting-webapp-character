import Attribute from './Attribute';
import Modifier from './Modifier';
import '../assets/AttributesCollection.css';

function AttributesCollection({ attributesArray, modifierProp }) {
  return attributesArray.map((attribute, index) => (
    <div key={index}>
      <Attribute key={index} name={attribute.getName()} value={attribute.getValue()} />
      {typeof modifierProp === 'object' && (
        <>
          Modifier <span className="Modifier">{attribute.getModifier()}</span>
          <Modifier
            index={index}
            onIncrement={modifierProp.onIncrementHandler}
            onDecrement={modifierProp.onDecrementHandler}
          />
        </>
      )}
    </div>
  ));
}

export default AttributesCollection;
