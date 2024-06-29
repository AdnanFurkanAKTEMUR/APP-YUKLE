"use client";

import AdminLayout from "@/app/_component/admin/adminLayout/AdminLayout";
import CreateCompanyUserComponent from "@/app/_component/admin/create_company_user/CreateCompanyUserComp";

export default function createCompanyUser() {
  return (
    <AdminLayout>
      <CreateCompanyUserComponent />
    </AdminLayout>
  );
}
