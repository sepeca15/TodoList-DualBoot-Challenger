
import Todolist from "./components/Todolist";
import Lista from "./components/Lista";
import Detalles from "./components/Detalles";
import Home from "./components/Home";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path='/todo'>
            <Todolist />
          </Route>
          <Route path='/lista'>
            <Lista />
          </Route>
          <Route path='/detalles/:id'>
            <Detalles />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
