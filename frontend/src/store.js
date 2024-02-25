import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; // Change the import path

import { userRegisterReducer, userLoginReducer } from "./reducers/user";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const initialState = {
  userLogin: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
