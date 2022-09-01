import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

import reducer from "./reducers";

export const store = configureStore({
  reducer,
  middleware: [thunk, logger]
});

export const persistor = persistStore(store);