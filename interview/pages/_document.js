import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default MyDocument;
