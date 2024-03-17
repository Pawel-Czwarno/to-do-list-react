import "./style.css";

const List = (props) => (
   <ul className="list">
      {props.tasks.map(task => (
         <li className={`list__element${task.done && props.hideDoneTasks ? " list__element--hidden" : ""}`}
            key={task.id}>
            <button className="list__button list__button--done">
               {task.done ? "✓" : ""}
            </button>
            <div className={`${task.done ? "list__element--done" : ""}`}>
               {task.content}</div>
            <button className="list__button list__button--remove">
               🗑
            </button>
         </li>
      ))}
   </ul>
);

export default List;