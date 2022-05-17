import "./App.css";
// import JustePrix from "./Components/JustePrix";
import ToDoList from "./Components/ToDoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bulma/css/bulma.min.css";

function App() {
  return (
    <main>
      {/* <JustePrix className="container bg-dark" />; */}
      <ToDoList className="container" />
    </main>
  );
}

export default App;
