import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/component/Layout';
import { TodosProvider } from '@/context/todosContext';

const inter = Inter({ subsets: ['latin'] });

/**
 * 【useContextの課題】
 * ・パフォーマンスチューニングを自前でやる必要がある
 * ・シンプルにContextファイルのコード量が多い
 * ・複数の状態があるときに管理が大変。またProviderが増えてネストが多くなることでコードが読みづらくなったり、context間での連携もネストで行っていくので難しい
 * ・SSRと相性が悪い
 * ※これらの課題を解決するのが外部の状態管理ライブラリ
 * ※XStateとReduxは難しい
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {/* 同じcontextプロバイダーをネストした場合より子のProviderのvalueが優先される。一部にだけ特定のvalueを適用した場合にネストさせるとよい */}
      <TodosProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TodosProvider>
    </div>
  );
}
