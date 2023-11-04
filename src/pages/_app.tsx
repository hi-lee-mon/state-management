import { useState } from 'react';
import { Header } from '@/component/Header';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Todo } from '@/types';
import { Layout } from '@/component/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: 'hoge', isDone: true }]);

  return (
    <div className={inter.className}>
      <Layout todoCount={todos.length}>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </Layout>
    </div>
  );
}
