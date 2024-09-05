import { useContext, useState } from 'react';
import {
  UsergroupAddOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const items = [
    // Home
    {
      label: <Link to={'/'}>Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },

    // User
    ...(auth.isAuthenticated
      ? [
          {
            label: <Link to={'/user'}>User</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
          },
        ]
      : []),

    // Login - Logout
    {
      label: `Welcome ${auth?.user?.name ?? ''}`,
      key: 'submenu',
      icon: <SettingOutlined />,
      children: [
        ...(auth.isAuthenticated
          ? [
              {
                label: (
                  <span
                    onClick={() => {
                      localStorage.clear('access_token');
                      setCurrent('home');
                      setAuth({
                        isAuthenticated: false,
                        user: {
                          name: '',
                          email: '',
                        },
                      });
                      navigate('/');
                    }}
                  >
                    Logout
                  </span>
                ),
                key: 'logout',
              },
            ]
          : [
              {
                label: <Link to={'/login'}>Login</Link>,
                key: 'login',
              },
            ]),
      ],
    },
  ];
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
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
