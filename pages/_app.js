import React from 'react';
import App, { Container } from 'next/app';
import { LocaleProvider } from 'antd';

import ru from 'antd/lib/locale-provider/ru_RU';
import '../asserts/styles.less';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LocaleProvider locale={ru}>
          <Component {...pageProps} />
        </LocaleProvider>
      </Container>
    );
  }
}
