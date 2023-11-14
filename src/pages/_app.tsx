import { useState } from 'react';
import { Header } from '@/component/Header';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Todo } from '@/types';
import { Layout } from '@/component/Layout';

const inter = Inter({ subsets: ['latin'] });

/**
 * 【Zustandの特徴】
 * ・flux
 * ・Reduxよりもシンプル
 * ・contextよりも記述量が少ない
 * ・contextよりもレンダリングを抑えられる
 * ・hooksを使う
 * ・providerを使わない
 * ・レンダリングを抑えくれる
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
