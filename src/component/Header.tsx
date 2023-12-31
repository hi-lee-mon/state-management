import { Todo } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import { TodoCounter } from './TodoCounter';

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
  return (
    <header>
      <nav className="flex items-center bg-slate-300 p-4">
        <h1 className="text-4xl flex-1">
          <Link href="/">useState</Link>
        </h1>
        <div className="flex gap-4">
          <Link href="/">TODO一覧</Link>
          <Link href="/add">TODOを追加</Link>
        </div>
      </nav>
      <TodoCounter todoCount={todoCount} />
      <hr />
    </header>
  );
};
