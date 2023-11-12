import React, { FC, ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">{children}</main>
    </>
  );
};
