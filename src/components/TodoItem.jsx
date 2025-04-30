export const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p className="todo-item-text">
        {props.name}
      </p>
    </div>
  );
};
