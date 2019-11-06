import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  login,
  logout,
  nameInput,
  getUsersAsync
} from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedin = useSelector(state => state.logged);
  const name = useSelector(state => state.name.name);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>The counter is: {counter}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {!isLoggedin ? <p>You are not logged in</p> : <p>You are logged in</p>}
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(login());
        }}
      >
        Log In
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(logout());
        }}
      >
        Log Out
      </button>

      <p>Your name is:</p>
      <p>{name}</p>
      <input
        onChange={e => {
          dispatch(nameInput(e));
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(getUsersAsync());
        }}
      >
        Get list of current Users
      </button>

      <div>
        {users.map(e => {
          return (
            <>
              <h3 key={e.id}>{e.name}</h3>
              <p>{e.username}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
