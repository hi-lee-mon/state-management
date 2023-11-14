import { Todo } from '@/types';

export type TodosState = {
  todos: Todo[];
  addTodo: (todo: Todo['text']) => void;
  toggleTodo: (id: Todo['id']) => void;
};

export type UsersState = {
  users: any[];
  fetchUsers: () => Promise<void>;
};

export type RootState = TodosState & UsersState;
