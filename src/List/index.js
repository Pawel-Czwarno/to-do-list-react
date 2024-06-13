import { StyledList, Element, DoneElement, Button } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <StyledList>
      {tasks.map(task => (
         <Element
            key={task.id}
            hidden={task.done && hideDone}
         >
            <Button
               $toggleDone
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✓" : ""}
            </Button>

            <DoneElement
               $done={task.done}
            >
               {task.content}
            </DoneElement>
            <Button
               $remove
               onClick={() => removeTask(task.id)}
            >
               🗑
            </Button>
         </Element>
      ))}
   </StyledList>
);

export default List;