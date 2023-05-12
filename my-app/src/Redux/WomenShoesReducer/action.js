import axios from "axios";
import {
  WOMEN_DATA_FAILURE,
  WOMEN_REQUEST_PENDING,
  GET_WOMEN_REQUEST_SUCCESSFUL,
  POST_WOMEN_REQUEST_SUCCESSFUL,
} from "./actionTypes";

export const getWomenShoesDataAction = (dispatch, obj) => {
  let url = "https://server22-for-amazon-clone.onrender.com/Women_Shoes";

  axios
    .get("https://server22-for-amazon-clone.onrender.com/Women_Shoes", {
      params: obj,
    })
    .then((res) => {
      dispatch({ type: GET_WOMEN_REQUEST_SUCCESSFUL, payload: res.data });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: WOMEN_DATA_FAILURE });
      console.log(err);
    });

  // axios
  //   .get(url)
  //   .then((res) => {
  //     console.log("res", res.data);
  //     dispatch({ type: GET_WOMEN_REQUEST_SUCCESSFUL, payload: res.data });
  //   })
  //   .catch(() => dispatch({ type: WOMEN_DATA_FAILURE }));
};

export const postShoesDataAction = (obj) => (dispatch) => {
  dispatch({ type: WOMEN_REQUEST_PENDING });
  return axios
    .post("https://server22-for-amazon-clone.onrender.com/Women_Shoes", obj)
    .then((res) =>
      dispatch({ type: POST_WOMEN_REQUEST_SUCCESSFUL, payload: res.data })
    )
    .catch(() => dispatch({ type: WOMEN_DATA_FAILURE }));
};
