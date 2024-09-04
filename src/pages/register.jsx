import { Button, Form, Input, notification } from 'antd';
import { createUserApi } from '../util/api';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { name, email, password } = values;
    const res = await createUserApi(name, email, password);
    if (res) {
      notification.success({
        message: 'User created successfully!',
        description: 'success',
      });
      navigate('/login');
    } else {
      notification.error({
        message: 'User creation failed',
        description: 'fail',
      });
    }
  };

  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <div style={{ padding: "20px" }}>
      <Link to={"/"}>Back Home</Link>
=======
    <div style={{ padding: '20px' }}>
      <Link to={'/'}>Back Home</Link>
>>>>>>> Stashed changes
=======
    <div style={{ padding: '20px' }}>
      <Link to={'/'}>Back Home</Link>
>>>>>>> Stashed changes

      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
      >
        {/* Name */}
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Email */}
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

        {/* Password */}
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

        {/* Button */}
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
