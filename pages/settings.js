import Head from 'next/head';
import { Layout, Breadcrumb, Icon } from 'antd';
import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

const { Sider, Content } = Layout;

const Settings = () => (
  <>
    <Head>
      <title>Settings</title>
      <meta name="description" content="description for indexing bots" />
    </Head>
    <Layout hasSider>
      <Content style={{ padding: '0 15px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} separator=">">
          <Breadcrumb.Item href="/"><Icon type="home" /></Breadcrumb.Item>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: '45px 50px',
            backgroundColor: '#fff',
            border: '1px solid #dadada',
          }}
        >
          <h1>Settings</h1>
          <p>...</p>
        </div>
      </Content>
    </Layout>
  </>
);

export default withAuth(withLayout(Settings));
