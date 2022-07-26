import Head from 'next/head';
import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode | undefined;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head></Head>
      <nav>{/* Navbar */}</nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
