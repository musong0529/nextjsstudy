// import '@src/styles/globals.css'
import type {AppProps} from 'next/app';
import '@src/styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout1 from '@src/components/layouts/layout1';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout1>
      <Component {...pageProps} />
    </Layout1>
  );
}

export default MyApp;
