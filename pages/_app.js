import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Synart Automations</title>
        <meta name='Description' content='Automate the boring stuffs using Robots' />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
