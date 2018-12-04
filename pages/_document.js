import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />

          <link
            rel="shortcut icon"
            href="/static/favicon.png"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans&amp;subset=cyrillic"
          />
          <link
            rel="stylesheet"
            href="/static/nprogress.css"
          />
        </Head>
        <body
          style={{
            color: '#6B6B6B',
            wordWrap: 'break-word',
            fontFamily: '\'Open Sans\', sans-serif',
            lineHeight: 1.7,
            fontSize: '14px',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
