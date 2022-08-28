import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import users from "./users";

const reducer = combineReducers({
  auth,
  users
});

export default reducer;