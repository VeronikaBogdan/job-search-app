import Head from 'next/head';

import '@/styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Jobored</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;