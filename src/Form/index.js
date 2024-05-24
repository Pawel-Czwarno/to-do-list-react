import { useState, useRef } from "react";
import { Input, Button, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={(inputRef)}
            />
            <Button onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};

export default Form;