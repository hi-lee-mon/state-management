import { useState } from 'react';
import { Header } from '@/component/Header';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Todo } from '@/types';
import { Layout } from '@/component/Layout';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

const inter = Inter({ subsets: ['latin'] });

/**
 * 【Reduxは】
 * ReactでFluxパターンを実現するためのライブラリ
 */
/**
 * 【Fluxは】
 * データフローの単方向性を保証するためのアーキテクチャ
 * viewから発行されたactionがdispatcherにわたって、dispatcherがactionと状態をstoreに渡し、storeからviewに渡るという一方向性を持つ
 */
/**
 * 【Reduxの仕様注意点】
 * ・全てのアプリがReduxを利用する必要があるわけではない
 * ・コードを書くための最短、最速の方法ではない(長期的なメンテナンス性がメリットなのでここら辺はトレードオフ)
 * ・生のReact。つまりuseStateやuseContextを使って問題が起きなければReduxを使う必要はない
 */
/**
 * 【Reduxの特徴】
 * 1. 予測可能
 *   テストがしやすい
 * 2. 一元化
 *   アプリケーションの状態は一箇所で全て管理する。
 *   その管理体制のおかげで状態を元に戻したり、進めたりできる。また状態の永続化もできる(local storageに状態を保存したりすることでブラウザの更新などしても状態を呼び出せる)
 * 3. デバック可能
 *   アプリケーションの状態を保存することで、デバックが容易になる。devtoolsを使うことで状態を確認できる。
 * 4. フレキシブル
 *   エコシステムがあるので便利
 */
export default function App({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: 'hoge', isDone: true }]);

  return (
    <div className={inter.className}>
      <Provider store={store}>
        <Layout todoCount={todos.length}>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </Provider>
    </div>
  );
}
