import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
   { id: 1, content: "porąbać drewno", done: false },
   { id: 2, content: "nawieźć trawnik", done: true },
];

const hideDoneTasks = false;

function App() {
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
            extraHeaderContent={<Button tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
            body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
         />
      </Main>
   );
}

export default App;
