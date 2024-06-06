import { useState, useEffect } from "react";

const useTasks = () => {
    const storagedTask = localStorage.getItem("task");

    const [tasks, setTasks] = useState(
        storagedTask ? JSON.parse(storagedTask) : []
    );

    const [hideDone, setHideDone] = useState(false);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task, done: true,
        })));
    };

    const addNewTask = (content) => {
        if (content !== "") {
            setTasks(tasks => [
                ...tasks, {
                    content,
                    done: false,
                    id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                }
            ]);
        }
    };

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks));
    }, [tasks]);

    return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask, toggleHideDone, hideDone };
};

export default useTasks;