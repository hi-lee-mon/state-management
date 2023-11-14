import { create } from 'zustand';
import { RootState } from './types';
import { createTodosSlice } from './todo';
import { createUsersSlice } from './user';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export const useStore = create<RootState>()(
  devtools(
    immer((...args) => {
      return {
        ...createTodosSlice(...args),
        ...createUsersSlice(...args),
      };
    })
  )
);
