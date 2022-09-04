import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import auth from "./auth";
import users from "./users";
import transactions from "./transactions";

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  users,
  transactions
});

export default reducer;