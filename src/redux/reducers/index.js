import { combineReducers } from "redux";
import { productsReducer, } from "./todosReducer";

const reducers = combineReducers({
    allTodos: productsReducer,
// todo: selectedTodosReducer,
});

export default reducers;