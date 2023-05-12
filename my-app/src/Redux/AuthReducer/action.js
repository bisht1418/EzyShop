import { USER_AUTH_STATUS, USER_LOGOUT } from "./actionTypes";

export const ChangeUserAuthStatusAction = (dispatch) => {
  dispatch({ type: USER_AUTH_STATUS });
};

export let addUser = (obj) => {
  let data = JSON.parse(localStorage.getItem("registerData")) || [];
  data.push(obj);
  localStorage.setItem("registerData", JSON.stringify(data));
};

export let checkUser = (obj) => {
  let data = JSON.parse(localStorage.getItem("registerData")) || [];
  let flag = false;
  data.forEach((element) => {
    if (element.Email == obj.Email && element.Password == obj.Password) {
      flag = element.first;
    }
  });
  return flag;
};

export const LogoutAction = (dispatch)=>{
  localStorage.setItem("isAuth", false);
  localStorage.setItem("name", "");
  dispatch({type : USER_LOGOUT})
  
}
