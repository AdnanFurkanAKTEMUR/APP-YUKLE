"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function adminHomePage() {
  const session = useSession();
  return (
    <div>
      <h2>Admin home page</h2>
      <h2>Hoşgeldiniz {session.data?.user?.name}</h2>
      <Link
        href={"/admin/create_company"}
        className="bg-blue-500 rounded text-white p-1 m-1"
      >
        {" "}
        Yeni Bir Şirket Kaydı Yap
      </Link>
      <Link
        href={"/admin/create_company_user"}
        className="bg-blue-500 rounded text-white p-1 m-1"
      >
        {" "}
        Bir Şirkete Kullanıcı Aç
      </Link>
    </div>
  );
}
