import { accordionActionsClasses } from "@mui/material";
import { useReducer } from "react";
import {
  UPDATE_LOGIN,
  CREATE_TASK,
  CURRENT_TASK
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return {
        ...state,
        currentForm: action.currentForm,
      };
    case CREATE_TASK:
      return {
        ...state,
        createTask: [...action.createTask]
      };
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: [...action.currentTask]
      }

    default:
      return state;
  }
};

export function useCurrentReducer(initialState) {
  return useReducer(reducer, initialState);
}
