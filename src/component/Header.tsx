import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center bg-slate-300 p-4">
        <h1 className="text-4xl flex-1">
          <Link href="/">状態管理ライブラリ名</Link>
        </h1>
        <div className="flex gap-4">
          <Link href="/">TODO一覧</Link>
          <Link href="/add">TODOを追加</Link>
        </div>
      </nav>
      <div className="flex justify-center my-20">
        <h2 className="text-6xl text-cyan-700 font-bold">TODO:2件</h2>
      </div>
      <hr />
    </header>
  );
};
