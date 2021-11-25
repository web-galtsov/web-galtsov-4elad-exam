import { ActionTypes } from "../constants/action-types";
const intialState = {
    todos: [], // object
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TODOS:
           /* return { ...state, todos: payload };*/
            return state;
        default:
            return state;
    }
};
