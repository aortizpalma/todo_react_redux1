import './App.css';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';

function App() {
  return (
    <div className="App">
      <h1>ToDo App with React, Redux, Hooks and Thunk</h1>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
