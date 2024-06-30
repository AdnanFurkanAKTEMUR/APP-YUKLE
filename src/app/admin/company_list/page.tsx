"use client";

import AdminLayout from "@/app/_component/admin/adminLayout/AdminLayout";
import CompanyListComponent from "@/app/_component/admin/CompanyListComponent/CompanyListComponent";

export default function createCompanyUser() {
  return (
    <AdminLayout>
      <CompanyListComponent />
    </AdminLayout>
  );
}
