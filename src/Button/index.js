import "./style.css";

const Button = ({ tasks, hideDoneTasks }) => (
   <div className="buttons">
      {tasks.length > 0 && (
         <>
            <button className="buttons__button">
               {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
               Ukończ wszystkie
            </button>
         </>
      )}
   </div>
);

export default Button;