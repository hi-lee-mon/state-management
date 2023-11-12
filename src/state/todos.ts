import { Todo } from '@/types';
import { Reducer } from 'redux';

// action type
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creator
export const addTodo = (text: Todo['text']) => {
  return {
    type: ADD_TODO,
    payload: { text },
  } as const;
};

export const toggleTodo = (id: Todo['id']) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  } as const;
};

type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

/**
 * 【Reducerのポイント】
 * ・Reducerは、現在のstateとactionを受け取り、新しいstateを返す関数
 */
/**
 *
 * @param state 現在のstate(状態の初期値は空配列として定義する)
 * @param action イベントで渡ってきたアクション
 * @returns (actionのpayloadとstoreの現在の状態を計算して作成した) 新しい状態
 */
export const todosReducer: Reducer<Todo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = { id: state.length, text: action.payload.text, isDone: false };
      return [...state, newTodo];
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    }
    default: {
      return state;
    }
  }
};
