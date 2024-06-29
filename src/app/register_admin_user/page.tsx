"use client";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { trpcReact } from "../_trpc/clientReact";
import { CreateAdminUserType } from "@/server/common/adminUserType/adminUserType";
const { Title } = Typography;
export default function registerAdminUser() {
  const { data, mutate, isError, isLoading, isSuccess } = trpcReact.adminUser.createAdminUser.useMutation();
  const onFinish = async (values: CreateAdminUserType) => {
    console.log("Received values of form: ", values);
    await mutate({
      name: values.name,
      surname: values.surname,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      email: values.email,
    });
  };
  if (isSuccess) {
    console.log(data);
  }
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
            Yükle Personeli Kayıt Ekranı
          </Title>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your Username!" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="name"
              />
            </Form.Item>
            <Form.Item
              name="surname"
              rules={[{ required: true, message: "Please input your surname!" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="surname"
              />
            </Form.Item>
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
            <Form.Item
              name="passwordConfirm"
              rules={[{ required: true, message: "Please confirm your Password!" }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
