import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import useTasks from "./useTasks";
import GlobalStyle from "./globalStyle";

function App() {

   const {
      tasks,
      removeTask,
      toggleTaskDone,
      setAllDone,
      addNewTask,
      toggleHideDone,
      hideDone
   } = useTasks();

   return (
      <Main>
         <GlobalStyle />
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
