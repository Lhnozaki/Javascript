import Axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const NAME_INPUT = "NAME_INPUT";
export const GET_USERS = "GET_USERS";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const login = () => {
  return { type: LOGIN };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const nameInput = data => {
  return {
    type: NAME_INPUT,
    payload: data.target.value
  };
};

export const getUsersAsync = () => async dispatch => {
  await Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(users => {
      console.log(users.data);
      dispatch({
        type: GET_USERS,
        payload: users.data
      });
    })
    .catch(error => {
      console.log(error.message);
    });
};
