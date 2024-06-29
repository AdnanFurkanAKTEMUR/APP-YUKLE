"use client";

import { trpcReact } from "@/app/_trpc/clientReact";
import { CompanyType } from "@/server/common/companyType/companyType";

export default function CreateCompanyUserComponent() {
  const { data, isLoading, isError, isSuccess } = trpcReact.company.getAllCompany.useQuery();
  console.log(data);
  if (isLoading) return <div>Yükleniyor</div>;
  if (isSuccess && data && data.value)
    return (
      <>
        <div>
          <h1 className="text-center"> İşlem yapılacak firmayı seçin</h1>
        </div>
        {/* @ts-ignore */}
        {data?.value.map((d: CompanyType, i: number) => {
          return <div key={i}>{d.name}</div>;
        })}
      </>
    );
  if (isError) return <div>hata</div>;
  return <div>hata</div>;
}
