import { SKILL_LIST } from '../consts';
import '../assets/Skills.css';

function Skills({ attributes }) {
  const skills = SKILL_LIST;

  return skills.map((skill, index) => {
    const matchingAttribute = attributes.find(
      (attribute) => attribute.getName() === skill.attributeModifier
    );

    return (
      <div key={index}>
        <p>
          <span>{skill.name}</span>
          <span>: {skill.attributeModifier}</span>
          {matchingAttribute && (
            <span className="Skills-Modifier">{matchingAttribute.getModifier()}</span>
          )}
        </p>
      </div>
    );
  });
}

export default Skills;
