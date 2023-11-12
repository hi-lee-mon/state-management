// import { Todo } from '@/types';
// import { Reducer } from 'redux';

// // action type
// const ADD_TODO = 'ADD_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';

// // action creator
// export const addTodo = (text: Todo['text']) => {
//   // actionを返す

//   return {
//     type: ADD_TODO,
//     payload: { text },
//   } as const;
// };

// export const toggleTodo = (id: Todo['id']) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id },
//   } as const;
// };

// type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// /**
//  * 【Reducerのポイント】
//  * ・Reducerは、現在のstateとactionを受け取り、新しいstateを返す関数
//  */
// /**
//  *
//  * @param state 現在のstate(状態の初期値は空配列として定義する)
//  * @param action イベントで渡ってきたアクション
//  * @returns (actionのpayloadとstoreの現在の状態を計算して作成した) 新しい状態
//  */
// export const todosReducer: Reducer<Todo[], Action> = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO: {
//       const newTodo = { id: state.length, text: action.payload.text, isDone: false };
//       return [...state, newTodo];
//     }
//     case TOGGLE_TODO: {
//       return state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, isDone: !todo.isDone };
//         } else {
//           return todo;
//         }
//       });
//     }
//     default: {
//       return state;
//     }
//   }
// };

import { Todo } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Todo[] = [];

/**
 * 【sliceとは】
 * ・action typeとaction creatorを自動生成してくれる
 * ・action creatorの戻り値に型をつける必要がない
 * ・action typeを定義する必要がない
 */
const todosSlice = createSlice({
  name: 'todos', // action typeのprefixになる
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: Todo['text'] }>) => {
      // const newTodo = { id: state.length, text: action.payload.text, isDone: false };
      // return [...state, newTodo];
      /**
       * 【immerを使ったstateの更新】
       * ・toolkitは内部的にimmerを使っているためreducer内ではミュータブルな操作が可能
       * ・immerを使うと、stateを直接変更しているように見えるが、実際には新しいstateを返している
       */
      state.push({
        id: state.length,
        text: action.payload.text,
        isDone: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<{ id: Todo['id'] }>) => {
      // return state.map((todo) => {
      //   if (todo.id === action.payload.id) {
      //     return { ...todo, isDone: !todo.isDone };
      //   } else {
      //     return todo;
      //   }
      // });
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  },
});

// export const addTodo = todosSlice.actions.addTodo;
// export const toggleTodo = todosSlice.actions.toggleTodo;
/**
 * 【action creatorの自動生成】
 * ・action creatorの自動生成を行うために、todosSlice.actionsをexportする
 * ※上の2行は下の1行と同じ意味
 */
export const { addTodo, toggleTodo } = todosSlice.actions;
/**
 * 【reducerの自動生成】
 * ・reducerの自動生成を行うために、todosSlice.reducerをexportする
 */
export const todosReducer = todosSlice.reducer;
