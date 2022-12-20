import Input from "./components/Input";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Input />
        </div>
      </header>

      <div className="container tasks">
        <Todolist />
      </div>
    </>
  );
}

export default App;
