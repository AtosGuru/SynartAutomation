import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const initialProps="";
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel=' icon' href='/favicon.ico' />

          <meta name='robots' content='follow, index' />
          <meta
            content='we offer intelligent automation solutions that are designed to take over repetitive, mental tasks and increase efficiency.'
            name='description'
          />
          <meta property='og:url' content='https://synart.in/' />
          <link rel='canonical' href='https://synart.in/' />
          <meta property='og:type' content='Official website of Synart' />
          <meta property='og:site_name' content='Safient' />
          <meta
            property='og:description'
            content='we offer intelligent automation solutions that are designed to take over repetitive, mental tasks and increase efficiency.'
          />
          <meta property='og:title' content='meta details goes here' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='@synart' />
          <meta name='twitter:site' content='https://twitter.com/' />
          <meta name='twitter:description' content='Automate the boring stuffs' />
          <meta name='twitter:image' content='https://twitter.com/' />

          <meta name='github:description' content='Automate the boring stuffs' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
