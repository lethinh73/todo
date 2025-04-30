export const TodoItem = (props) => {
  const handleClick = () => {
    console.log("Todo item clicked:", props.name);
  };

  return (
    <div className="todo-item" onClick={handleClick}>
      <input
        type="checkbox"
        className="todo-item-checkbox"
        checked={props.isCompleted}
      />
      <span className="todo-item-text">{props.name}</span>
      {props.isImportant && <span> ⭐️</span>}
    </div>
  );
};
