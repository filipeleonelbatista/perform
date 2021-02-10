import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z5HF4HGPH2"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z5HF4HGPH2');
            `}}
          />

          <link href="/fonts/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default CustomDocument;
