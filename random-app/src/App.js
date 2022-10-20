import './App.css';
import TodoItem from './comps/TodoItem';

function App() {
  return (
    <div className="App">
      <TodoItem></TodoItem>
    </div>
  );
}

export default App;

/**
 * Summary:  This is going to be a little side project that
 * I will be working on.  This is going to be working on a
 * advance todo list.  It will have a "backlog" of things to
 * do like in Jira, however, this will not be based on features
 * 
 * In short, I want to have the ability to send things from 
 * backlog into the day, and keep that running list going.
 * There mgiht be cases where it might be a few days to complete,
 * so having a timer would be nice as well.
 * 
 * Also what I would like to do is to do which would be more 
 * advance would be to send the undone items back into the
 * backlog and add to notes/mark them as sent back
 * 
 * 
 * TODO: 
*/
