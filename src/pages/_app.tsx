import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/component/Layout';
import { TodosProvider } from '@/context/todosContext';

const inter = Inter({ subsets: ['latin'] });

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
