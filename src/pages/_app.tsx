// import '@src/styles/globals.css'
import type {AppProps} from 'next/app';
import '@src/styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout1 from '@src/components/layouts/layout1';
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    </SessionProvider>
  );
}

export default MyApp;
