"use client";

import AdminLayout from "@/app/_component/admin/adminLayout/AdminLayout";
import { trpcReact } from "@/app/_trpc/clientReact";
import { useForm } from "antd/es/form/Form";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import TextArea from "antd/es/input/TextArea";

export default function edit_company() {
  const [form] = useForm();
  const searchParams = useSearchParams();
  const _id_from_url = searchParams.get("_id");
  const { data, isLoading, isSuccess, isError } = trpcReact.company.getCompany.useQuery({ _id: _id_from_url ? _id_from_url : "" });
  console.log(data);
  const onFinish = async (values: any) => {
    form.resetFields();
  };
  if (isLoading) {
    return <div>Bekleyiniz</div>;
  }
  if (isSuccess && data.success) {
    return (
      <AdminLayout>
        <Form
          name="create_company"
          initialValues={data.value}
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
      </AdminLayout>
    );
  }
  if (isError) {
    return <div>hata</div>;
  }
}
