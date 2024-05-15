import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import useTasks from "./useTasks";
import { useState } from "react";

function App() {
   const [hideDone, setHideDone] = useState(false);

   const storagedTask = localStorage.getItem("task");
   
   const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
   };

   const {
      tasks,
      removeTask,
      toggleTaskDone,
      setAllDone,
      addNewTask
   } = useTasks(storagedTask);

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
