import { GET_CATEGORY, GET_PRODUCT, SET_LOADING } from "../types";

const initialValue = {
  category: "",
  product: "",
  isLoading: "",
};
const callApiReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, category: action.payload };

    case GET_PRODUCT:
      return { ...state, product: action.payload };

    // case SET_LOADING:
    //   return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
export default callApiReducer;
