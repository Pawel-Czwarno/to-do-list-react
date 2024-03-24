import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFomrSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
    };

    return (
        <form className="form" onSubmit={onFomrSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;