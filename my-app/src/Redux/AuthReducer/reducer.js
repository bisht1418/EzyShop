import { USER_AUTH_STATUS } from "./actionTypes";

let initial = {
  isAuth: localStorage.getItem("isAuth") || false,
  name: localStorage.getItem("name") || "",
};
export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case USER_AUTH_STATUS:
      return { ...state, isAuth: true };
    case "USER_NAME_STATUS": {
      return { ...state, name: payload };
    }
    default:
      return state;
  }
};
