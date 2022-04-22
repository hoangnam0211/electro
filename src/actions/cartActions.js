import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const addProduct = (val) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: val,
  });
};

export { addProduct };
