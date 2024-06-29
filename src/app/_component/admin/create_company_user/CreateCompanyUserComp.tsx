"use client";

import { trpcReact } from "@/app/_trpc/clientReact";
import { CompanyType } from "@/server/common/companyType/companyType";
import Table from "antd/es/table/Table";
import Link from "next/link";

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Telefon",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Vkn",
    dataIndex: "vkn",
    key: "vkn",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Link href="/admin/company_page">Düzenle</Link>,
  },
];

export default function CreateCompanyUserComponent() {
  const { data, isLoading, isError, isSuccess } = trpcReact.company.getAllCompany.useQuery();

  if (isLoading) return <div>Yükleniyor</div>;
  if (isSuccess && data && data.value && Array.isArray(data.value))
    return (
      <>
        <div>
          <h1 className="text-center"> İşlem yapılacak firmayı seçin</h1>
        </div>
        <div style={{ padding: 24 }}>
          <Table
            dataSource={data.value}
            columns={columns}
          />
        </div>
      </>
    );
  if (isError) return <div>hata</div>;
  return <div>hata</div>;
}
