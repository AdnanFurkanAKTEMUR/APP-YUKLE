"use client";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const { Title } = Typography;
interface user {
  email: string;
  password: string;
}
const Login = () => {
  const onFinish = async (values: user) => {
    console.log("Received values of form: ", values);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/admin/admin_home",
    });
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
      className="w-full"
    >
      <Col className="w-1/2">
        <Card>
          <Title
            level={2}
            style={{ textAlign: "center" }}
          >
            Login
          </Title>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!", type: "email" }]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
