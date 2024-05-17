import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import authReducer from "./features/authSlice";

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
