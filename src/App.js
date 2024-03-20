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

const hideDone = false;

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
            extraHeaderContent={<Button tasks={tasks} hideDone={hideDone}/>}
            body={<List tasks={tasks} hideDone={hideDone} />}
         />
      </Main>
   );
}

export default App;
