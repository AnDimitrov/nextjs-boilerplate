import Head from 'next/head';
import Link from 'next/link';
import Button from 'antd/lib/button';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

const Login = () => (
  <div style={{ textAlign: 'center', margin: '0 20px' }}>
    <Head>
      <title>Log in</title>
      <meta name="description" content="Login page" />
    </Head>
    <br />
    <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log in</p>
    <p>You’ll be logged in for 14 days unless you log out manually.</p>
    <br />
    <Link href="/auth/google">
      <Button type="danger" icon="google">Log in with Google</Button>
    </Link>
  </div>
);

export default withAuth(withLayout(Login), { logoutRequired: true });
