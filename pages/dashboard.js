import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Layout, Breadcrumb, Icon } from 'antd';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

const { Sider, Content } = Layout;

class Dashboard extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="description" />
        </Head>
        <Layout hasSider>
          <Content style={{ padding: '0 15px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} separator=">">
              <Breadcrumb.Item href="/"><Icon type="home" /></Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: '45px 50px',
                backgroundColor: '#fff',
                border: '1px solid #dadada',
              }}
            >
              <h1>Dashboard</h1>
              <div><img src={user.avatarUrl} alt="" /></div>
              <div>{`Name: ${user.displayName}`}</div>
              <div>{`Email: ${user.email}`}</div>
            </div>
          </Content>
          <Sider
            style={{
              marginTop: '54px',
              padding: '0 15px',
              background: 'transparent',
            }}
            theme="light"
            width="390"
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '30px 45px',
                border: '1px solid #DADADA',
                overflow: 'hidden',
                clear: 'both',
                height: 'fit-content',
                borderRadius: 4,
              }}
            >
              Right sidebar
            </div>
          </Sider>
        </Layout>
      </>
    );
  }
}

export default withAuth(withLayout(Dashboard));
