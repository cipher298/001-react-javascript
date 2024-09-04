import { useState } from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: <Link to={'/'}>Home</Link>,
      key: 'home',
      icon: <MailOutlined />,
    },
    {
      label: <Link to={'/user'}>User</Link>,
      key: 'user',
      icon: <MailOutlined />,
    },
    {
      label: 'Welcome',
      key: 'welcome',
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={'/login'}>Login</Link>,
          key: 'login',
        },
        {
          label: (
            <span
              onClick={() => {
                localStorage.clear('access_token');
                setCurrent('home');
                navigate('/');
              }}
            >
              Logout
            </span>
          ),
          key: 'logout',
        },
      ],
    },
    {
      label: <Link to={'/register'}>Register</Link>,
      key: 'register',
      icon: <MailOutlined />,
    },
  ];
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};

export default Header;
