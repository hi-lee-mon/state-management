import { Todo } from '@/types';
import { create } from 'zustand';

type State = {
  todos: Todo[];
  addTodo: (todo: Todo['text']) => void;
  toggleTodo: (id: Todo['id']) => void;
};
export const useStore = create<State>((set) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        text,
        isDone: false,
      };
      return { todos: [...state.todos, newTodo] };
    });
  },
  toggleTodo: (id) => {
    set((state) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return { todos: newTodos };
    });
  },
}));
