import '../assets/Attribute.css';
function Attribute({ name, value }) {
  return (
    <div className="Attribute">
      <p>
        {name} <span className="Content">{value}</span>
      </p>
    </div>
  );
}

export default Attribute;
