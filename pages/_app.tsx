import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '../theme';
import Cookies from 'js-cookie';

import '../styles/globals.css';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'dark';
    const selectedTheme: Theme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;
    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: 'dark' };
//   const validTheme = ['light', 'dark', 'custom'];
//   return { theme: validTheme.includes(theme) ? theme : 'dark' };
// };

export default MyApp;
