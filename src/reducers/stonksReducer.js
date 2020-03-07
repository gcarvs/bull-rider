import { UPDATE_STONKS_VALUE } from "../actions/actionTypes";

const initialState = {
  stonksValue: "Not Stonks :/"
};

export const stonksReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STONKS_VALUE:
      return {
        ...state,
        stonksValue: action.stonksValue
      };
    default:
      return state;
  }
};
