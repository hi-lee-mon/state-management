import React, { FC, ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  todoCount: number;
};

export const Layout: FC<Props> = ({ children, todoCount }) => {
  return (
    <>
      <Header todoCount={todoCount} />
      <main className="container mx-auto py-10">{children}</main>
    </>
  );
};
