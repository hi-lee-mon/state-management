import { FC } from 'react';

type Props = {
  todoCount: number;
};

export const TodoCounter: FC<Props> = ({ todoCount }) => {
  return (
    <div className="flex justify-center my-20">
      <h2 className="text-6xl text-cyan-700 font-bold">TODO:{todoCount}件</h2>
    </div>
  );
};
