"use client";

import { trpcReact } from "@/app/_trpc/clientReact";
import { CompanyType } from "@/server/common/companyType/companyType";
import Table from "antd/es/table/Table";
import Link from "next/link";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function CompanyListRouter() {
  const { data, isLoading, isError, isSuccess, refetch, isFetched } = trpcReact.company.getAllCompany.useQuery();
  const { data: deleteCompData, isError: deleteError, isLoading: deleteLoading, isSuccess: deleteSuccess, mutate } = trpcReact.company.deleteCompany.useMutation();
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
      render: (_: any, record: any) => (
        <div className="flex justify-around">
          {" "}
          <Link
            className="text-yellow-500 font-bold"
            href={`/admin/company_page?_id=${record._id}`}
          >
            <EditOutlined />
          </Link>
          <div
            className="text-red-500 font-bold hover:cursor-pointer"
            onClick={async () => {
              //mutate({ _id: record._id });
            }}
          >
            <DeleteOutlined />
          </div>
        </div>
      ),
    },
  ];
  if (deleteSuccess && deleteCompData.success && !deleteLoading && !isLoading) {
    refetch();
  }
  if (isLoading) return <div>Yükleniyor</div>;
  if (isSuccess && data && data.value && Array.isArray(data.value))
    return (
      <>
        <div>
          <h1 className="text-center text-xl"> İşlem yapılacak firmayı seçin</h1>
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
