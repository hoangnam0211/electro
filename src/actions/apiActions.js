import { GET_CATEGORY, GET_PRODUCT } from "../types";
import axios from "axios";
import { loading } from "./userActions";

const getCategory = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/category"
    );
    dispatch({ type: GET_CATEGORY, payload: res.data.data });
    dispatch(loading(false));
  } catch (error) {
    console.log(error);
    dispatch(loading(false));
  }
};

const getProduct = () => async (dispatch) => {
  try {
    // dispatch(loading(true));
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/product"
    );
    dispatch({ type: GET_PRODUCT, payload: res.data.data });
    // dispatch(loading(false));
  } catch (error) {
    console.log(error);
    // dispatch(loading(false));
  }

  // const isLoading = (isloading) => {
  //   return {
  //     type: SET_LOADING,
  //     payload: isloading,
  //   };
  // };
};

export { getCategory, getProduct };
