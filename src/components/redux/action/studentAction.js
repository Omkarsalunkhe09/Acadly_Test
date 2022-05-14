import { ActionTypes } from "../contants/Action-types";
export const setStudents = (students) => {
  return {
    type: ActionTypes.SET_STUDENTS,
    payload: students,
  };
};

export const selectStudent = (students) => {
  return {
    type: ActionTypes.SELETED_STUDENTS,
    payload: students,
  };
};
