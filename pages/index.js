import Head from 'next/head';
import { Layout } from 'antd';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

const { Sider, Content } = Layout;

const Index = () => (
  <>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="description" />
    </Head>
    <Layout hasSider>
      <Content style={{ padding: '0 15px' }}>
        <div style={{ marginTop: 54 }}>
          <div
            style={{
              padding: '45px 50px',
              backgroundColor: '#fff',
              border: '1px solid #dadada',
              marginBottom: 50,
            }}
          >
            <h1>Block 1</h1>
          </div>

          <div
            style={{
              padding: '45px 50px',
              backgroundColor: '#fff',
              border: '1px solid #dadada',
              marginBottom: 50,
            }}
          >
            <h1>Block 2</h1>
          </div>
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

export default withAuth(withLayout(Index));
