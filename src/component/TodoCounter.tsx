import { useStore } from '@/state/todo';
import { FC } from 'react';

export const TodoCounter: FC = () => {
  const todos = useStore((state) => state.todos);
  return (
    <div className="flex justify-center my-20">
      <h2 className="text-6xl text-cyan-700 font-bold">TODO:{todos.length}件</h2>
    </div>
  );
};
