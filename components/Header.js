import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Row, Col, Menu } from 'antd';

import MenuDrop from './MenuDrop';

const optionsMenu = [
  {
    text: 'Settings',
    href: '/settings',
  },
  {
    text: 'Log out',
    href: '/logout',
  },
];

const Header = ({ user, router }) => {
  let activeMenuItem = null;
  switch (router.pathname) {
    case '/dashboard':
      activeMenuItem = 'dashboard';
      break;
    default:
      activeMenuItem = null;
  }
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col sm={{ span: 20 }} xs={{ span: 18 }}>
        <Link prefetch href="/">
          <a style={{ float: 'left', marginRight: 20 }}>
            <img
              src="/static/logo.svg"
              alt="Logo"
              style={{ margin: '0px auto 0px 20px', width: 45 }}
            />
          </a>
        </Link>
        {user ? (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[activeMenuItem]}
            style={{ lineHeight: '64px', backgroundColor: 'rgba(54,54,54)' }}
          >
            <Menu.Item key="dashboard">
              <Link prefetch href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
          </Menu>
        ) : null}
      </Col>
      <Col sm={{ span: 1, offset: 1 }} xs={{ span: 6 }}>
        {user ? (
          <div style={{ whiteSpace: ' nowrap' }}>
            {user.avatarUrl ? (
              <MenuDrop options={optionsMenu} src={user.avatarUrl} alt="" />
            ) : null}
          </div>
        ) : (
          <Link prefetch href="/login">
            <a>Log in</a>
          </Link>
        )}
      </Col>
    </Row>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
  router: PropTypes.object.isRequired, // eslint-disable-line
};

Header.defaultProps = {
  user: null,
};

export default withRouter(Header);
