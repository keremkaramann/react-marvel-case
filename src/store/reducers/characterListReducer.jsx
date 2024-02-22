import { FETCH_HEROES } from "../actions/characterListReducerAction";

const globalInitialState = {
  heroes: [],
};

const heroList = (state = globalInitialState, action) => {
  switch (action.type) {
    case FETCH_HEROES:
      return { ...state, heroes: action.payload };
    default:
      return state;
  }
};

export default heroList;
