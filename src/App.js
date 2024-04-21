import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";

function App() {
   const [hideDone, setHideDone] = useState(false);
   const storagedTask = localStorage.getItem("task");
   const [tasks, setTasks] = useState(
      storagedTask ? JSON.parse(storagedTask) : []
   );
   
   const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
   };

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

   useEffect(() => {
      localStorage.setItem("task", JSON.stringify(tasks));
   }, [tasks]);

   return (
      <Main>
         <Header
            title="Lista zadań"
         />

         <Section
            title="Dodaj nowe zadanie"
            body={<Form addNewTask={addNewTask} />}
         />

         <Section
            title="Lista zadań"
            extraHeaderContent={
               <Button
                  tasks={tasks}
                  hideDone={hideDone}
                  toggleHideDone={toggleHideDone}
                  setAllDone={setAllDone}
               />
            }
            body={
               <List
                  tasks={tasks}
                  hideDone={hideDone}
                  removeTask={removeTask}
                  toggleTaskDone={toggleTaskDone}
               />
            }
         />
      </Main>
   );
}

export default App;
