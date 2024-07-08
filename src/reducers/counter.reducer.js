import { DECREASE, INCREASE } from "../actions/counter.action";

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      if (state.count - 1 >= 0) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      throw new Error("Pass valid action type");
  }
};

export default counterReducer;
