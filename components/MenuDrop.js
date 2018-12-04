import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Dropdown, Menu, Avatar,
} from 'antd';

class MenuDrop extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(String).isRequired,
  };

  render() {
    const { options, src } = this.props;

    const menu = (
      <Menu>
        {options.map((option, index) => [
          <Menu.Item key={option.text}>
            <Link prefetch href={option.href} as={option.as || option.href}>
              <a style={{ padding: '0px 20px' }}>{option.text}</a>
            </Link>
          </Menu.Item>,
          (index === options.length - 2 ? <Menu.Divider key={`_${option.text}`} /> : null),
        ])}
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          <Avatar style={{ margin: '0px 20px 0px auto' }} src={src} size="large" />
        </a>
      </Dropdown>
    );
  }
}

export default MenuDrop;
