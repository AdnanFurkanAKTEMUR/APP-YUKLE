"use client";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { trpcReact } from "@/app/_trpc/clientReact";
import { CreateCompanyType } from "@/server/common/companyType/companyType";
const { Title } = Typography;
export default function createCompanyPage() {
  const [form] = useForm();
  const { data, mutate, isSuccess, isLoading, isError } = trpcReact.company.createCompnay.useMutation();
  const onFinish = async (values: CreateCompanyType) => {
    mutate({
      name: values.name,
      address: values.address,
      phone_number: values.phone_number,
      vkn: values.vkn,
    });
    form.resetFields();
  };
  return (
    <div>
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
              Yeni Bir Şirket Kaydı Oluşturun
            </Title>
            <Form
              name="create_company"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              form={form}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder="name"
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder="address"
                />
              </Form.Item>
              <Form.Item
                name="phone_number"
                rules={[{ required: true, message: "Please input your Email!" }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder="phone"
                />
              </Form.Item>
              <Form.Item
                name="vkn"
                rules={[{ required: true, message: "Please input your vkn!" }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder="vkn"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Kaydet
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
