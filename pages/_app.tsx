import GlobalStyle from '@/components/styles/globa';
import Variables from '@/components/styles/variables';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <Component {...pageProps} />
    </>
  );
}
