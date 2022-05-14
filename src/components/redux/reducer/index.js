import { combineReducers } from "redux";

import { StudentReducer } from "./studentReducer";

const reducer = combineReducers({
  allStudents: StudentReducer,
});

export default reducer;
