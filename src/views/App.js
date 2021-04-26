import './App.css';
import React from "react";
import TodoActions from './../actions/TodoActions';

function App(props) {
  return (
    <div className="App">
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
    </header>
  );
}

/**
 * @return {null}
 */
function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.complete}
                onChange={() => {

                }}
              />
              <label>{todo.text}</label>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="destroy"
        onClick={() => {
          TodoActions.addTodo("HAHAHAHA");
        }}>ADD
      </button>
    </section>
  );
}

/**
 * @return {null}
 */
function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {props.todos.size}
        </strong>
        {' items left'}
      </span>
    </footer>
  );
}

export default App;
