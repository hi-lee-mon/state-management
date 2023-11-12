import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/component/Layout';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

const inter = Inter({ subsets: ['latin'] });

/**
 * 【依存関係について】
 * @reduxjs/toolkitの中にreduxが含まれているためreduxは依存関係から削除
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
