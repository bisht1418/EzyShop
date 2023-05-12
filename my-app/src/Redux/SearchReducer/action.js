import axios from "axios";
import {
  SEARCH_DATA_FAILURE,
  SEARCH_REQUEST_PENDING,
  GET_SEARCH_REQUEST_SUCCESSFUL,
} from "./actionTypes";

export const getSearchDataAction =
  (searchTerm = "", history) =>
  (dispatch) => {
    dispatch({ type: SEARCH_REQUEST_PENDING });

    // Search Functionality
    if (searchTerm && searchTerm.length > 0) {
      let url = `https://server22-for-amazon-clone.onrender.com/All-products?q=${searchTerm}`;

      return axios
        .get(url)
        .then((res) => {
          dispatch({ type: GET_SEARCH_REQUEST_SUCCESSFUL, payload: res.data });
        })
        .catch(() =>{
          dispatch({ type: SEARCH_DATA_FAILURE })
        } );
    }
  };

  