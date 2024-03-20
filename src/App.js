import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

const tasks = [
   { id: 1, content: "porąbać drewno", done: false },
   { id: 2, content: "nawieźć trawnik", done: true },
];

function App() {
   const [hideDone, setHideDone] = useState(false);
   const [tasks, setTasks] = useState([
      { id: 1, content: "porąbać drewno", done: false },
      { id: 2, content: "nawieźć trawnik", done: true },
   ]);

   const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
   };

   const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
   };

   return (
      <Main>
         <Header
            title="Lista zadań"
         />

         <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
         />

         <Section
            title="Lista zadań"
            extraHeaderContent={
               <Button
                  tasks={tasks}
                  hideDone={hideDone}
                  toggleHideDone={toggleHideDone}
               />
            }
            body={
               <List
                  tasks={tasks}
                  hideDone={hideDone}
                  removeTask={removeTask}
               />
            }
         />
      </Main>
   );
}

export default App;
