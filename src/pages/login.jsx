import { Button, Form, Input, notification } from 'antd';
import { loginApi } from '../util/api';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const { email, password } = values
        const res = await loginApi(email, password)

        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token)
            notification.success({
                message: 'Login successfully!',
                description: 'Success',
            })
            navigate("/")
        } else {
            notification.error({
                message: 'Login failed',
                description: res?.EM ?? 'Error',
            })
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <Link to={"/"}>Back Home</Link>

            <Form
                name="basic"
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
                autoComplete="off"
                layout='vertical'
            >
                {/* Email */}
                <Form.Item
                    label="Email"
                    name="email"
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
                    label="Password"
                    name="password"
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
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage
