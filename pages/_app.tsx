import Navbar from '@/components/shared/Navbar';
import GlobalStyle from '@/components/styles/globa';
import Variables from '@/components/styles/variables';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
