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

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z5HF4HGPH2"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z5HF4HGPH2');

                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TQ5FPFF');
            `}}
          />

          <link href="/fonts/style.css" rel="stylesheet" />
        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQ5FPFF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default CustomDocument;
