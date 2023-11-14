import { StateCreator } from 'zustand';
import { RootState, UsersState } from './types';

export const createUsersSlice: StateCreator<
  RootState,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  UsersState
> = (set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    set({ users: data }, false, 'fetchUsers');
  },
});
