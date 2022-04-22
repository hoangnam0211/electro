import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const initialValue = {
  cart: "",
};
const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: action.payload };

    case DELETE_PRODUCT:
      return {};

    default:
      return state;
  }
};
export default cartReducer;
