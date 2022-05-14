import { ActionTypes } from "../contants/Action-types";

const initialstore = {
  students: [],
};

export const StudentReducer = (state = initialstore, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
};
