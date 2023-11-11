import Link from 'next/link';
import { FC } from 'react';
import { TodoCounter } from './TodoCounter';
import { useTodosContext } from '@/context/todosContext';

export const Header: FC = () => {
  // 実際、UIにしか関心がないheaderのような共通的なコンポーネント内でカスタムフックは使わないほうがよい。カスタムフックに依存するため、機能を意識したつくりになるし副作用が生まれることでテストがしづらい。
  const todos = useTodosContext();
  return (
    <header>
      <nav className="flex items-center bg-slate-300 p-4">
        <h1 className="text-4xl flex-1">
          <Link href="/">useContext</Link>
        </h1>
        <div className="flex gap-4">
          <Link href="/">TODO一覧</Link>
          <Link href="/add">TODOを追加</Link>
        </div>
      </nav>
      <TodoCounter todoCount={todos.length} />
      <hr />
    </header>
  );
};
