import { combineReducers } from "redux";

import breedReducer from "./breed";
import myListReducer from "./myList";

const allReducers = combineReducers({
  breedReducer,
  myListReducer,
});

export default allReducers;