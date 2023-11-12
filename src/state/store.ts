// import { combineReducers, legacy_createStore } from 'redux';
// import { todosReducer } from './todos';

// export const store = legacy_createStore(
//   combineReducers({
//     todos: todosReducer,
//   })
// );

import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// 「RootState と AppDispatch の型をストア自体から推論する」
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
