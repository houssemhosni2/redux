import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';

const App = () =>{
  return (
    <div className="App">
      <h1 className="text-center">Todo List</h1>
      <ListTask />
      <AddTask/>
    </div>
  );
}
export default App;