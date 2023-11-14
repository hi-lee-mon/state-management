import { Todo } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  todos: Todo[];
  addTodo: (todo: Todo['text']) => void;
  toggleTodo: (id: Todo['id']) => void;
};

/**
 * ミドルウェア
 * immer: 状態の更新を簡単にする
 * devtools: redux devtoolsを使えるようにする
 */
export const useStore = create<State>()(
  devtools(
    immer((set) => ({
      todos: [],
      addTodo: (text) => {
        set(
          (state: State) => {
            state.todos.push({ id: state.todos.length + 1, text, isDone: false });
            // const newTodo: Todo = {
            //   id: state.todos.length + 1,
            //   text,
            //   isDone: false,
            // };
            // return { todos: [...state.todos, newTodo] };
          },
          false,
          'addTodo'
        );
      },
      toggleTodo: (id) => {
        set(
          (state) => {
            state.todos.forEach((todo: Todo) => {
              if (todo.id === id) {
                todo.isDone = !todo.isDone;
              }
            });
            // const newTodos = state.todos.map((todo) => {
            //   if (todo.id === id) {
            //     return { ...todo, isDone: !todo.isDone };
            //   }
            //   return todo;
            // });
            // return { todos: newTodos };
          },
          false,
          'toggleTodo'
        );
      },
    }))
  )
);
