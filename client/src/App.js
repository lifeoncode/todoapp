import Nav from "./components/Nav";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Nav />
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
