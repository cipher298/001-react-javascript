import { Button, Col, Divider, Form, Input, notification, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { loginApi } from '../util/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const { email, password } = values;
    const res = await loginApi(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem('access_token', res.access_token);
      notification.success({
        message: 'Login successfully!',
        description: 'Success',
      });
      setAuth({
        isAuthenticated: true,
        user: {
          name: res?.user?.name,
          email: res?.user?.email,
        },
      });
      navigate('/');
    } else {
      notification.error({
        message: 'Login failed',
        description: res?.EM ?? 'Error',
      });
    }
  };

  return (
    <Row justify={'center'} style={{ marginTop: '30px' }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: '15px',
            margin: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <legend>Login</legend>
          <Form
            name='basic'
            onFinish={onFinish}
            autoComplete='off'
            layout='vertical'
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Login
              </Button>
            </Form.Item>
          </Form>
          <Link to={'/'}>
            <ArrowLeftOutlined /> Back to Home Page
          </Link>
          <Divider />
          <div style={{ textAlign: 'center' }}>
            Dont have account? <Link to={'/register'}>Sign up here</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
