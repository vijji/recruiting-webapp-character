function Modifier({ index, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={() => onIncrement(index)}>+</button>
      <button onClick={() => onDecrement(index)}>-</button>
    </div>
  );
}

export default Modifier;
