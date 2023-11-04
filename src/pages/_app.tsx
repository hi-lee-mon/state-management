import { Header } from '@/component/Header';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Header />
      <main className="container mx-auto py-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
