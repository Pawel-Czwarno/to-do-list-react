import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <ul className="list">
      {tasks.map(task => (
         <li className={`list__element${task.done && hideDone ? " list__element--hidden" : ""}`}
            key={task.id}>
            <button
               onClick={() => toggleTaskDone(task.id)}
               className="list__button list__button--done"
            >
               {task.done ? "✓" : ""}
            </button>

            <div
               className={`${task.done ? "list__element--done" : ""}`}
            >
               {task.content}
            </div>
            <button
               className="list__button list__button--remove"
               onClick={() => removeTask(task.id)}
            >
               🗑
            </button>
         </li>
      ))}
   </ul>
);

export default List;