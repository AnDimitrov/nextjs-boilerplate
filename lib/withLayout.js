import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Layout, Icon, BackTop } from 'antd';

import HeaderContent from '../components/Header';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const { Header, Content, Footer } = Layout;

function withLayout(BaseComponent) {
  return class App extends Component {
    static propTypes = {
      pageContext: PropTypes.object, // eslint-disable-line
    }

    static defaultProps = {
      pageContext: null,
    }

    static getInitialProps = (ctx) => {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }

      return {};
    }

    render() {
      return (
        <Layout>
          <BackTop>
            <div
              style={{
                background: 'rgba(100, 100, 100, 0.4)',
                color: '#FFF',
                textAlign: 'center',
                lineHeight: '40px',
                width: 40,
                borderRadius: 4,
                transition: 'background-color 0.3s linear',
              }}
            >
              <Icon type="up" />
            </div>
          </BackTop>
          <Header
            style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%',
              backgroundColor: 'rgba(54,54,54)',
              fontWeight: 500,
            }}
          >
            <HeaderContent {...this.props} />
          </Header>
          <Content style={{ margin: '64px 0 40px', padding: '0 50px' }}>
            <BaseComponent {...this.props} />
          </Content>
          <Footer
            style={{
              backgroundColor: '#1F1F1F',
              padding: '10px 0',
              borderTop: '1px solid #3A3A3A',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            ©2018 Created by me
          </Footer>
        </Layout>
      );
    }
  };
}

export default withLayout;
