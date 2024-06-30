"use client";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { trpcReact } from "@/app/_trpc/clientReact";
import { CreateCompanyType } from "@/server/common/companyType/companyType";
import AdminLayout from "@/app/_component/admin/adminLayout/AdminLayout";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
const { Title } = Typography;
export default function createCompanyPage() {
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Kayıt Başarılı",
      duration: 3,
    });
  };
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

  if (isSuccess && data.success && !isLoading) {
    success();
  }
  return (
    <AdminLayout>
      {contextHolder}
      <Title
        level={2}
      >
        Yeni Bir Şirket Kaydı Oluşturun
      </Title>

      <div>
        <Form
          name="create_company"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          form={form}
        >
          {" "}
          <Row
            style={{ minHeight: "100vh" }}
            className="w-full"
          >
            <Col className="w-1/2">
              <Form.Item
                label="Firma ismi"
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                label="Adres"
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
              >
                <TextArea placeholder="" />
              </Form.Item>
              <Form.Item
                label="Telefon Numarası"
                name="phone_number"
                rules={[{ required: true, message: "Please input your Email!" }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                label="Vergi Kimlik Numarası"
                name="vkn"
                rules={[{ required: true, message: "Please input your vkn!" }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Click me!
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </AdminLayout>
  );
}
