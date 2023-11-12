import { RootState } from '@/state/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const TodoCounter: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div className="flex justify-center my-20">
      <h2 className="text-6xl text-cyan-700 font-bold">TODO:{todos.length}件</h2>
    </div>
  );
};
