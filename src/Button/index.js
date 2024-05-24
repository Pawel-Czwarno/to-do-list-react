import { ButtonsPanel, Buttons } from "./styled";

const Button = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
   <ButtonsPanel>
      {tasks.length > 0 && (
         <>
            <Buttons onClick={toggleHideDone}>
               {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Buttons>
            <Buttons
               onClick={setAllDone}
               disabled={tasks.every(({ done }) => done)}
            >
               Ukończ wszystkie
            </Buttons>
         </>
      )}
   </ButtonsPanel>
);

export default Button;