import counterReducer from "./counter";
import loggedReducer from "./logged";
import nameInputReducer from "./nameInput";
import getUsersReducer from "./users";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  name: nameInputReducer,
  users: getUsersReducer
});

export default allReducers;
